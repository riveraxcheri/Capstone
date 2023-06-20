from django.urls import path, include
from comments import views

    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
urlpatterns = [
    path('delete/', views.delete_comm),
    path('post/', views.user_post_comm),
    path('<int:id>/', views.get_by_user), #Still working on it
    path('', views.get_all_comments),
    # path('teacher_user/<int:pk>/', views.comm_by_tch_id),
    # path('student_user/<int:pk>/', views.comm_by_stu_id),
]