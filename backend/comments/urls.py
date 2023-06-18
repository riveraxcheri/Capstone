from django.urls import path, include
from comments import views

urlpatterns = [
    path('<int:pk>/', views.user_comments_detail),
    path('', views.all_comments),
    path('teacher_user/<int:pk>/', views.comm_by_tch_id),
    # path('student_user/<int:pk>/', views.comm_by_stu_id),
]