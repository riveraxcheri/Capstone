from django.urls import path, include
from comments import views

    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
urlpatterns = [
    path('<int:pk>/', views.user_comments_detail),
    path('', views.comments_list),
    # path('teacher_user/<int:pk>/', views.comm_by_tch_id),
    # path('student_user/<int:pk>/', views.comm_by_stu_id),
]