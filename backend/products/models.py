from django.db import models
from authentication.models import Student

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100, verbose_name="Product")
    cost = models.IntegerField(default=10)
    category = models.CharField(max_length=100, verbose_name="Category")
    inventory = models.IntegerField(default=1)
    is_available = models.BooleanField('availability status',default=True)
    # in_cart = models.BooleanField(models.ManyToManyRel_meta.get_fields('products_cart.user_id'))

    def __str__(self) -> str:
        return f"{self.name}" 
    

class Cart(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="student user" )
    products = models.ManyToManyField(Products, default=["empty cart"],)
    is_submitted = models.BooleanField(default=False,)
#   # Need to change permissions so only Teachers can Submit

    def __str__(self) -> str:
        return f"{self.student}"
    


# /// New Error /// 6.18:
# Provide a many-to-many relation by using 
# an intermediary model that holds two ForeignKey fields 
# pointed at the two sides of the relation.
# Unless a through model was provided, 
# ManyToManyField will use the create_many_to_many_intermediary_model 
# factory to automatically generate the intermediary model.

#brainstorm of cart total
    # total = models.IntegerField(default=0)
    # def get_total(self):
    #     return f"{self.products.cost}" * len(f"{self.products}")

    # def save(self, *args, **kwargs):
    #     self.total = self.get_total()
    #     super().save(*args, **kwargs)


# /// My old intermediary model before I decided to go with just the 2:
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