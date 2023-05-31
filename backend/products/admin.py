from django.contrib import admin
from .models import Products, Cart, CartProduct
# Register your models here.
admin.site.register([Products, Cart, CartProduct])