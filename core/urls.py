from django.urls import path
from .views import (
	HomeView,
	ShopView,
	ItemDetailView,
	CartView,
	checkout,
	add_to_cart,
	remove_from_cart,
	remove_single_item_from_cart,

	collections
	)

app_name = 'core'

urlpatterns = [
	path('', HomeView.as_view(), name='home'),
	path('shop', ShopView.as_view(), name="shop"),
	path('shop/search', ShopView.as_view(), name="shop_search"),
	path('checkout', checkout, name="checkout"),
	path('cart', CartView.as_view(), name="cart"),
	path('products/<slug>/', ItemDetailView.as_view(), name="products"),
	path('add-to-cart/<slug>/', add_to_cart, name="add-to-cart"),
	path('remove-from-cart/<slug>/', remove_from_cart, name="remove-from-cart"),
	path('remove-single-item-from-cart/<slug>/', remove_single_item_from_cart, name="remove-single-item-from-cart"),

	path('collections', collections, name="collections")
]