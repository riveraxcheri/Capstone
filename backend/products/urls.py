from django.urls import path, include
from products import views

urlpatterns = [
    # PRODUCTS
    path('all/', views.get_all_products),
    path('<int:pk>/', views.product_by_id),
    path('', views.create_products),
    path('add/<int:products_pk>/cart/<int:cart_pk>/', views.add_cart_products),
    path('remove/<int:products_pk>/cart/<int:cart_pk>/', views.remove_cart_products),
    # CART
    path('cart/', views.create_cart),
    path('cart/<int:user_id>/', views.cart_view),

]