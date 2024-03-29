from django.urls import path, include
from products import views

urlpatterns = [
    # PRODUCTS
    path('all/', views.get_all_products), # GET- Allow Any
    path('', views.create_products), # POST
    path('<int:pk>/', views.product_by_id), # GET / PUT / DELETE
    # CART
    path('+cart/<int:pk>/', views.create_cart),#pk=user id / # POST
    path('cart/<int:pk>/', views.cart_view), #pk=cart id / # GET / PUT / DELETE
    path('add/<int:products_pk>/cart/<int:cart_pk>/', views.add_cart_products), # PATCH - ADD
    path('remove/<int:products_pk>/cart/<int:cart_pk>/', views.remove_cart_products), # PATCH - REMOVE



]