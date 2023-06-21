from rest_framework import serializers
from .models import Products, Cart



class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
        # fields = ['id', 'name', 'cost', 'category','inventory','is_available']

class CartSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id','products','user']
        depth = 1

    # def create(self):
    #     cart = Cart.objects.create(
    #         student = ['student'],
    #         products = ['products'],
    #         is_submitted = ['is_submitted']
    # )
    #     cart.save()
    #     return cart