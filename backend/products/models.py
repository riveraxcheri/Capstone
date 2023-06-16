from django.db import models
from authentication.models import User, Student

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=10)
    category = models.CharField(max_length=100)
    inventory = models.IntegerField(default=1)
    is_available = models.BooleanField('availability status',default=True)

    def __str__(self) -> str:
        return f"{self.name}"

class Cart(models.Model):
    cart_user = models.ForeignKey(Student, null=0 ,on_delete=models.CASCADE)
    products = models.ManyToManyField(Products, default=[])
    total = models.IntegerField(default=0)
    submitted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.cart_user.username}'s Cart"

# class CartProduct(models.Model):
#     cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
#     product = models.ForeignKey(Products, on_delete=models.CASCADE)
#     quantity = models.IntegerField(default=1)

#     def __str__(self) -> str:
#         return f"{self.product}"

