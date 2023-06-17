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
from authentication.models import User

# Create your views here.
# PRODUCTS CRUD /// *DONE*
#RETRIEVE *DONE*
@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_products(request):
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)
#CREATE *DONE*
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
#UPDATE *DONE*
    if request.method == 'PUT':
        if serializer.is_valid(raise_exception=True):
            serializer.save(data=request.data)
            return Response(serializer.data)
#DELETE *DONE*
    elif request.method == 'DELETE':
        products.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
# /// PRODUCTS END ///    
    
# CART Views ///
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def open_cart(request):
    if request.method == 'POST':
        Cart.objects.create()
        serializer = CartSerializer(data=request.data)
        serializer.is_valid (raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view (['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def update_cart(request, pk):
    pk = User.objects.get(pk)
    cart = get_object_or_404(Cart, pk=pk)
    if request.method == 'PUT':
        serializer = CartSerializer(cart, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    elif request.method == 'DELETE':
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        serializer = CartSerializer(cart)
        return Response(serializer.data)
    return Response(f"No Cart in Progress",status=status.HTTP_404_NOT_FOUND)
    
    # //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# REFERENCES
# // stack overflow examples // 
# 1.
# from django.db.models import F, Sum
#
# def cart(request):
#     cart = Cart.objects.annotate(
#         cost=Sum(F('products__item__cost') * F('products__quantity'))
#     ).get(
#         cart_user=request.user
#     )
#     cart.total = cart.cost
#     cart.save()
# 2.
# def cart(request):
#     cart= Cart.objects.get(cart_user=request.user)
#     products= Products.objects.filter(cart=cart)
#     total = 0
#     for i in products:
#         total = i.count * i.products.cost + cart.total
#         cart.update(total=total)
#         cart.save()
# 3.
# #class OrderItem(DateTimeModel):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="order_items")
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1, blank=True, null=True)
#     price = models.DecimalField(max_length=100, default=0, max_digits=7, decimal_places=2)
#     total = models.DecimalField(max_digits=7, decimal_places=2, default=0)
# # need to add tax percentage along with it tax may be changed in future so we need to add tax percentage in this
#
# def __str__(self):
#     return f"{self.id} - {self.order}"
#
# def get_total(self):
#     return round(float(self.price) * float(self.quantity))
#
# def save(self, *args, **kwargs):
#     self.total = self.get_total()
#     super().save(*args, **kwargs)

# /// From Comments API for reference:
# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_by_video(request, video_id):
#     text = request.query_params.get('t')
#     comments = Comment.objects.all()
#     if text:
#         comments = comments.filter(text=text)
#         serializer = CommentSerializer(comments, many=True)
#         return Response(serializer.data)
#     comments = Comment.objects.filter(video_id=video_id)
#     serializer = CommentSerializer(comments, many=True)
#     return Response(serializer.data)

# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def video_comments(request):
#     print(
#         'User', f"{request.user.id} {request.user.email} {request.user.username}"
#     )
#     if request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     elif request.method == 'GET':
#         comments = Comment.objects.filter(user=request.user)
#         serializer = CommentSerializer(comments, many=True)
#         return Response(serializer.data)


# /// From Products API Project for reference:
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

# /// Other GET CART attempt info:
# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def user_cart(request):
    # print(
    #     'User ', f"{request.cart_user.username}")
    # cart = Cart.objects.filter(request.cart_user)
    # if request.method == 'GET':
    #     cart = get_object_or_404(Cart)
    #     serializer = CartSerializer(cart, many=True)
    #     if cart == True:
    #         print (f"{request.cart_user.username}, {request.data}")
    #         return Response(serializer.data)
    #     return Response(f"No Cart in Progress for {request.cart_user.username}",status=status.HTTP_404_NOT_FOUND)

        # cart.create()
        # print (request.data) #Logging data for debugging
        # cart = Cart.objects.create()