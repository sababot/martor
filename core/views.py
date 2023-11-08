from django.shortcuts import render
from .models import Item

def item_list(request):
	context = {
		'items': Item.objects.all()
	}
	return render(request, "index.html", context)

def shop(request):
	return render(request, "shop.html")

def collections(request):
	return render(request, "collections.html")