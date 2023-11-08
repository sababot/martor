from django.urls import path
from .views import item_list, shop, collections

app_name = 'core'

urlpatterns = [
	path('', item_list, name='item-list'),
	path('shop', shop, name="shop"),
	path('collections', collections, name="collections")
]