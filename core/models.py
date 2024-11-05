from django.conf import settings
from django.db import models
from django.shortcuts import reverse

CATEGORY_CHOICES = {
	('S', 'SHIRT'),
	('HO', 'HOODIE'),
	('HA', 'HAT')
}

COLLECTION_CHOICES = {
	('1', 'Fall To Rise')
}

IMAGE_CHOICE = {
	('1', 'Front'),
	('2', 'Back')
}

class Item(models.Model):
	title = models.CharField(max_length=100)
	price = models.FloatField()
	category = models.CharField(choices=CATEGORY_CHOICES, max_length=2)
	collection = models.CharField(choices=COLLECTION_CHOICES, max_length=1)
	slug = models.SlugField()
	description = models.TextField()
	side = models.CharField(choices=IMAGE_CHOICE, max_length=1, default='1')

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse("core:products", kwargs={
			'slug': self.slug
			});

	def get_add_to_cart_url(self):
		return reverse("core:add-to-cart", kwargs={
			'slug': self.slug
			})

	def get_remove_from_cart_url(self):
		return reverse("core:remove-from-cart", kwargs={
			'slug': self.slug
			})

class OrderItem(models.Model):
	user = models.CharField(max_length=40)

	ordered = models.BooleanField(default=False)
	item = models.ForeignKey(Item, on_delete=models.CASCADE)
	quantity = models.IntegerField(default=1)

	def __str__(self):
		return f"{self.quantity} of {self.item.title}"

class Order(models.Model):
	user = models.CharField(max_length=40)

	items = models.ManyToManyField(OrderItem)
	start_date = models.DateTimeField(auto_now_add=True)
	ordered_date = models.DateTimeField()
	ordered = models.BooleanField(default=False)

	def __str__(self):
		return self.user