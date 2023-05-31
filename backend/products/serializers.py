from rest_framework import serializers
from .models import Products, Cart , CartProduct

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
        # ['id', 'name', 'cost', 'category', 'image','inventory','is_available']

class CartSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True, read_only=True)
    class Meta:
        model = Cart
        fields = ['id', 'user', 'products', 'total', 'submitted']
        depth = 1

class CartProductSerializer(serializers.ModelSerializer):
    cart = CartSerializer(many=True, read_only=True)
    product = ProductsSerializer(many=True, read_only=True)
    class Meta:
        model = CartProduct
        fields = ['id', 'cart', 'product', 'quantity']
