from rest_framework import serializers
from .models import Products, Cart



class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
        # fields = ['id', 'name', 'cost', 'category','inventory']

class CartSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id','products','is_active','user']
        depth = 1

    # def create(self):
    #     cart = Cart.objects.create(
    #         user = ['user'],
    #         products = ['products']
    # )
    #     cart.save()
    #     return cart