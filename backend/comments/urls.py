from django.urls import path, include
from comments import views

    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
urlpatterns = [
    path('<int:pk>/', views.delete_comm),
    path('', views.user_post_comm),
    path('<int:user_id>/', views.get_by_user), 
    path('all/', views.get_all_comments),

]