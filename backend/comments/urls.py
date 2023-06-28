from django.urls import path, include
from comments import views

    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
urlpatterns = [
    path('<int:pk>/', views.delete_comm), #DELETE
    path('', views.user_post_comm), #POST
    path('all/', views.get_all_comments), #GET
    path('user/<int:user_id>/', views.get_by_user), #GET = coming back empty but "200:OK"

]