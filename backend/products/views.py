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
from authentication.models import Student
from django.contrib.auth import get_user_model
User = get_user_model()

# PRODUCTS ///

# GET ALL 
@api_view (['GET']) #for Store Page
@permission_classes([AllowAny])
def get_all_products(request):
    request.method == 'GET' #Done
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)

# GET BY ID / # UPDATE / # DELETE
@api_view (['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def product_by_id(request, pk):
    product = get_object_or_404(Products, pk=pk)
    
    if request.method == 'GET': #Done
        serializer = ProductsSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'PUT': #Done
        serializer = ProductsSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    if request.method == 'DELETE': #Done
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# CREATE PRODUCTS / # POST 
@api_view(['POST']) #for staff to add product inventory
@permission_classes([IsAuthenticated])
def create_products(request):
    if request.method == 'POST': #Done
        serializer = ProductsSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

# /// PRODUCTS END ///    
    
# CART ///

# // # GET CART / # UPDATE / # DELETE
@api_view (['GET', 'PUT', 'DELETE']) #To pull cart by cart id 
@permission_classes([AllowAny])
def cart_view(request,pk):
    try:
        cart = Cart.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET': #Done
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    if request.method == 'PUT': #Done
        serializer = CartSerializer(cart, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    if request.method == 'DELETE': #Done
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# // # POST CART
@api_view(['POST']) #for Students to start a Shopping Cart
@permission_classes([AllowAny])
def create_cart(request, pk):
    request.method == 'POST' #Done
    try:
        user = User.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND) 
    serializer = CartSerializer(user, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# // # PATCH- ADD
@api_view(['PATCH']) 
@permission_classes([IsAuthenticated])
# add to cart
def add_cart_products(request, products_pk, cart_pk): #Done
    if request.method == 'PATCH': 
        try:
            products = Products.objects.get(pk=products_pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        try:
            cart = Cart.objects.get(pk=cart_pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if cart.is_active:
            cart.products.add(products)
            cart.save()
            serializer = CartSerializer(cart)
            return Response(serializer.data, status=status.HTTP_200_OK)
        # return create_cart()??

# // # PATCH- REMOVE
@api_view(['PATCH']) 
@permission_classes([IsAuthenticated])
# remove from cart
def remove_cart_products(request, products_pk, cart_pk): #Done
    request.method == 'PATCH'
    try:
        products = Products.objects.get(pk=products_pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    try:
        cart = Cart.objects.get(pk=cart_pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if cart.is_active:
        cart.products.remove(products)
        cart.save()
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

