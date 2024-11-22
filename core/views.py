from django.contrib import messages
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView, View
from django.shortcuts import redirect
from django.utils import timezone
from .models import Item, OrderItem,  Order

class HomeView(ListView):
	model = Item
	template_name = "index.html"

class ShopView(ListView):
	model = Item
	paginate_by = 10
	template_name = "shop.html"

	def get_context_data(self, **kwargs):
    	# Get the default context data from the superclass
		context = super().get_context_data(**kwargs)
        
		# Add the 'is_search' flag based on the current URL
		context['is_search'] = 'search' in self.request.path
        
		return context

class WipsView(ListView):
	model = Item
	paginate_by = 10
	template_name = "wips.html"

	def get_context_data(self, **kwargs):
    	# Get the default context data from the superclass
		context = super().get_context_data(**kwargs)
        
		# Add the 'is_search' flag based on the current URL
		context['is_search'] = 'search' in self.request.path
        
		return context

def checkout(request):
	return render(request, "checkout.html")

class CartView(View):
	def get(self, *args, **kwargs):
		order = Order.objects.get(user=self.request.session.session_key, ordered=False)
		context = {
			'object': order
		}
		return render(self.request, "cart.html", context)

class ItemDetailView(DetailView):
	model = Item
	template_name = "products.html"

def add_to_cart(request, slug):
	if not request.session.session_key:
		request.session.save()

	item = get_object_or_404(Item, slug=slug)
	order_item, created = OrderItem.objects.get_or_create(
		item=item,
		user=request.session.session_key,
		ordered=False
	)
	order_qs = Order.objects.filter(user=request.session.session_key, ordered=False)
	if order_qs.exists():
		order = order_qs[0]
		if order.items.filter(item__slug=item.slug).exists():
			order_item.quantity += 1
			order_item.save()
			messages.info(request, "Item quantity was updated")
		else:
			messages.info(request, "This item was added to your cart")
			order_item.quantity = 1
			order_item.save()
			order.items.add(order_item)
	else:
		ordered_date = timezone.now()
		order = Order.objects.create(user=request.session.session_key, ordered_date=ordered_date)
		order_item.quantity = 1
		order_item.save()
		order.items.add(order_item)
		messages.info(request, "This item was added to your cart")
	return redirect("core:cart")

def remove_from_cart(request, slug):
	item = get_object_or_404(Item, slug=slug)
	order_qs = Order.objects.filter(
		user=request.session.session_key,
		ordered=False
)
	if order_qs.exists():
		order = order_qs[0]
		if order.items.filter(item__slug=item.slug).exists():
			order_item = OrderItem.objects.filter(
				item=item,
				user=request.session.session_key,
				ordered=False
			)[0]
			order_item.quantity = 0
			order_item.save()
			order.items.remove(order_item)
			messages.info(request, "This item was removed to your cart")
			return redirect("core:cart")
		else:
			messages.info(request, "This item was not in your cart")
			return redirect("core:cart")
	else:
		messages.info(request, "You do not have an active order")
		return redirect("core:cart")

def remove_single_item_from_cart(request, slug):
	item = get_object_or_404(Item, slug=slug)
	order_qs = Order.objects.filter(
		user=request.session.session_key,
		ordered=False
)
	if order_qs.exists():
		order = order_qs[0]
		if order.items.filter(item__slug=item.slug).exists():
			order_item = OrderItem.objects.filter(
				item=item,
				user=request.session.session_key,
				ordered=False
			)[0]
			order_item.quantity -= 1
			order_item.save()
			if order_item.quantity == 0:
				order.items.remove(order_item)

			messages.info(request, "This item quantity was updated")
			return redirect("core:cart")
		else:
			messages.info(request, "This item was not in your cart")
			return redirect("core:cart")
	else:
		messages.info(request, "You do not have an active order")
		return redirect("core:cart")

def collections(request):
	return render(request, "collections.html")