from rest_framework import serializers
from .models import Products, Cart
# from authentication.serializers import RegistrationSerializer
# from django.contrib.auth import get_user_model
from authentication.serializers import StudentSerializer


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['id', 'name', 'cost', 'category','inventory','is_available']

class CartSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=True, read_only=True)
    user = StudentSerializer(many=False, read_only=True)
    class Meta:
        model = Cart
        fields = ['id', 'submitted', 'user_id', 'products']
        depth = 1

    
    # def create(self, validated_data):
    #     return Cart.objects.create(**validated_data)
    # def update(self, instance, validated_data):
    #     return super().update(instance, validated_data)
    
    
# class CartProductSerializer(serializers.ModelSerializer):
#     cart = CartSerializer(many=True, read_only=True)
#     product = ProductsSerializer(many=True, read_only=True)
#     class Meta:
#         model = CartProduct
#         fields = ['id', 'cart', 'product', 'quantity']
