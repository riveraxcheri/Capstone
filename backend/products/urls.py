from django.urls import path, include
from products import views
# from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', views.get_all_products),
    path('add/', views.add_products),
    path('<int:pk>/', views.update_products),
    path('cart/', views.open_cart),
    path('cart/<int:id>/', views.update_cart),
    # path('cart/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]