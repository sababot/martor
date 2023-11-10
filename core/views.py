from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.shortcuts import redirect
from .models import Item, OrderItem,  Order

class HomeView(ListView):
	model = Item
	template_name = "index.html"

class ShopView(ListView):
	model = Item
	template_name = "shop.html"

class ItemDetailView(DetailView):
	model = Item
	template_name = "products.html"

def add_to_cart(request, slug):
	item = get_object_or_404(Item, slug=slug)
	order_item = OrderItem.objects.create(item=item)
	order_qs = Order.objects.filter(user=request.user, ordered=False)
	if order_qs.exists():
		order = order_qs[0]
		if order.items.filter(item__slug=item.slug).exists():
			order_item.quantity += 1
			order_item.save()
	else:
		order = Order.objects.create(user=request.user)
		order.items.add(order_item)
	return redirect("core:products", kwargs={
		'slug': slug
		})

def collections(request):
	return render(request, "collections.html")