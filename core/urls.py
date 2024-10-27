from django.urls import path
from .views import (
	HomeView,
	ShopView,
	ItemDetailView,
	add_to_cart,
	remove_from_cart,

	collections
	)

app_name = 'core'

urlpatterns = [
	path('', HomeView.as_view(), name='home'),
	path('shop', ShopView.as_view(), name="shop"),
	path('products/<slug>/', ItemDetailView.as_view(), name="products"),
	path('add-to-cart/<slug>/', add_to_cart, name="add-to-cart"),
	path('remove-from-cart/<slug>/', remove_from_cart, name="remove-from-cart"),

	path('collections', collections, name="collections")
]