from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView
from .student.views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('students/', students_list),
    path('students/<str:username>/', students_by_username),
    path('teachers/', teachers_list),
    path('teachers/<str:username>/', teachers_detail),
    path('users/', users_detail),
]
