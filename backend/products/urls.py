from django.urls import path, include
from products import views

urlpatterns = [
    # PRODUCTS
    path('', views.get_all_products),
    path('<int:pk>/', views.product_by_id),
    path('add/', views.add_products),
    path('edit/<int:pk>/', views.update_products),
    path('add/<int:product_pk>/cart/<int:cart_pk>)', views.add_cart_products),
    path('remove/<int:product_pk>/cart/<int:cart_pk>)', views.remove_cart_products),
    # CART
    # path('cart/', views.create_cart),
    # path('cart/<int:pk>/', views.cart_view),

]