from django.db import models
from authentication import Student

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=10)
    category = models.CharField(max_length=100)
    image = models.ImageField(default='static/images/man.png')
    inventory = models.IntegerField(default=1)
    is_available = models.BooleanField('availability status',default=True)

    def __str__(self) -> str:
        return f"{self.name}"

class Cart(models.Model):
    user = models.ManyToManyField(Student)
    products = models.ManyToManyField(Products)
    total = models.IntegerField(default=0)
    submitted = models.BooleanField(default=False)

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart)
    product = models.ForeignKey(Products)
    quantity = models.IntegerField(default=1)

    def __str__(self) -> str:
        return f"{self.product}"

