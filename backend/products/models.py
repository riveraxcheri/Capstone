from django.db import models
from authentication.models import Student

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
    cart_user = models.OneToOneField(Student, null=0 ,on_delete=models.CASCADE)
    cart_products = models.ManyToManyField(Products, default=[])
    submitted = models.BooleanField(default=False)


    def __str__(self) -> str:
        return f"{self.cart_user}'s Cart"

    # total = models.IntegerField(default=0)
    # def get_total(self):
    #     return f"{self.products.cost}" * len(f"{self.products}")

    # def save(self, *args, **kwargs):
    #     self.total = self.get_total()
    #     super().save(*args, **kwargs)



# class CartProduct(models.Model):
#     cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
#     product = models.ForeignKey(Products, on_delete=models.CASCADE)
#     quantity = models.IntegerField(default=1)

#     def __str__(self) -> str:
#         return f"{self.product}"
#/////////////////////////////////////////////////////////////
# def __str__(self):
#     return f"{self.id}"
#
# def get_total(self):
#     return f"{self.products.cost}" * len(f"{self.products}")

# def save(self, *args, **kwargs):
#     self.total = self.get_total()
#     super().save(*args, **kwargs)