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
    student = StudentSerializer(read_only=True)
    # user_id = StudentSerializer(many=False, read_only=True)
    class Meta:
        model = Cart
        fields = ['id', 'is_submitted', 'products', 'student']
        depth = 1

    def create(self):
        cart = Cart.objects.create(
            student = ['student'],
            products = ['products'],
            is_submitted = ['is_submitted']
    )
        cart.save()
        return cart