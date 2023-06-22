from django.urls import path, include
from products import views

urlpatterns = [
    # PRODUCTS
    path('all/', views.get_all_products),
    path('<int:pk>/', views.product_by_id),
    path('<str:name>/', views.product_by_name),
    path('', views.create_products),
    path('add/<int:products_pk>/cart/<int:cart_pk>/', views.add_cart_products),
    path('remove/<int:products_pk>/cart/<int:cart_pk>/', views.remove_cart_products),
    # CART
    path('cart/', views.create_cart),
    path('cart/<int:pk>/', views.cart_view), #pk=cart id
    # path('cart/<int:used_id>/', views.user_view),

]