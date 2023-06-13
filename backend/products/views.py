from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Products
from .serializers import ProductsSerializer
from .models import Cart
from .serializers import CartSerializer
from django.shortcuts import get_object_or_404

# Create your views here.
# PRODUCTS
@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_products(request):
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_products(request):
    serializer = ProductsSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view (['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def update_products(request, pk):
    products = get_object_or_404(Products, pk=pk)
    serializer = ProductsSerializer(products, data=request.data)
    if request.method == 'PUT':
        if serializer.is_valid(raise_exception=True):
            serializer.save(data=request.data)
            return Response(serializer.data)
    elif request.method == 'DELETE':
        Products.delete(pk=pk)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
    
# CART
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_cart(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cart = Cart.objects.filter(user_id=request.user.id)
        serializer = CartSerializer(cart, many=True)
        return Response(serializer.data)