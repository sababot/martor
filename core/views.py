from django.contrib import messages
from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.shortcuts import redirect
from django.utils import timezone
from .models import Item, OrderItem,  Order

class HomeView(ListView):
	model = Item
	template_name = "index.html"

class ShopView(ListView):
	model = Item
	template_name = "shop.html"

def checkout(request):
	return render(request, "checkout.html")

class OrderSummaryView(DetailView):
	model = Order
	template_name = 'order_summary.html'

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
			order.items.add(order_item)
	else:
		ordered_date = timezone.now()
		order = Order.objects.create(user=request.session.session_key, ordered_date=ordered_date)
		order.items.add(order_item)
		messages.info(request, "This item was added to your cart")
	return redirect("core:products", slug=slug)

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
			order.items.remove(order_item)
			messages.info(request, "This item was removed to your cart")
			return redirect("core:products", slug=slug)
		else:
			messages.info(request, "This item was not in your cart")
			return redirect("core:products", slug=slug)
	else:
		messages.info(request, "You do not have an active order")
		return redirect("core:products", slug=slug)

def collections(request):
	return render(request, "collections.html")