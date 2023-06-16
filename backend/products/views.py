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
# PRODUCTS Views
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
        products.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
# CART Views
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_cart(request):
    print(
        'User ', f"{request.user.username}")
    cart = Cart.objects.filter(cart_user=request.cart_user)
    if request.method == 'GET':
        serializer = CartSerializer(cart, many=True)
        if cart == True:
            return Response(serializer.data)
        return Response(f"No Cart in Progress for {request.user.username}",status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'POST':
        # cart.create()
        print (request.data) #Logging data for debugging
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view (['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def update_cart(request, pk):
    cart = get_object_or_404(Cart, pk=pk)
    serializer = CartSerializer(cart, data=request.data)
    if request.method == 'PUT':
        if serializer.is_valid(raise_exception=True):
            # cart.update()
            serializer.save(data=request.data)
            return Response(serializer.data)
    elif request.method == 'DELETE':
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# From Products API Project for reference
# @api_view(['GET', 'POST'])
# def products_list(request):
#     if request.method == 'GET':
#         products = Product.objects.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = ProductSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# @api_view(['GET', 'PUT', 'DELETE'])
# def product_detail(request, pk):
#     product= get_object_or_404(Product, pk=pk)
#     if request.method == 'GET':
#         serializer = ProductSerializer(product);
#         return Response(serializer.data)
#     elif request.method == 'PUT':
#         serializer = ProductSerializer(product, data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
#     elif request.method == 'DELETE':
#         product.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)