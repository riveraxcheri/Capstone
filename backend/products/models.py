from django.db import models
from authentication.models import User

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=10, help_text="Represents the number of points needed to purchase the product")
    category = models.CharField(max_length=100)
    inventory = models.IntegerField(default=1, help_text="Represents the number of products in stock")



    def __str__(self) -> str:
        return f"{self.name}" 
    

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Products)
    is_active = models.BooleanField(default=True, help_text="Indicator for code to not open a new cart if one is already active")
        #is_active will be changed to False onSubmit (frontend)

    def __str__(self) -> str:
        return f"{self.user.username}'s Cart"
    




#brainstorm of cart total
    # total = models.IntegerField(default=0)
    # def get_total(self):
    #     return f"{self.products.cost}" * len(f"{self.products}")

    # def save(self, *args, **kwargs):
    #     self.total = self.get_total()
    #     super().save(*args, **kwargs)

#/////////////////////////////////////////////////////////////
# def __str__(self):
#     return f"{self.id}"
#
# def get_total(self):
#     return f"{self.products.cost}" * len(f"{self.products}")

# def save(self, *args, **kwargs):
#     self.total = self.get_total()
#     super().save(*args, **kwargs)