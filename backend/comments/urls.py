from django.urls import path, include
from comments import views


urlpatterns = [
    path('<int:pk>/', views.user_comm), # GET / DELETE
    path('', views.user_post_comm), # POST
    path('all/', views.get_all_comments), # GET

]