from django.urls import path, include
from products import views

urlpatterns = [
    path('', views.get_all_products),
    path('add/', views.add_products),
    path('<int:pk>/', views.update_products),
]