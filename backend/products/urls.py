from django.urls import path, include
from products import views
# from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # PRODUCTS
    path('', views.get_all_products),
    path('add/', views.add_products),
    path('<int:pk>/', views.update_products),
    # CART
    # path('cart/', views.create_cart),
    # path('cart/<int:pk>/', views.update_cart),
    # path('cart/<int:pk>/<int:id>', views.finalize_cart),
]