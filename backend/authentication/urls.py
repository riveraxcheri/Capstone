from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView
from .student.views import *

urlpatterns = [
    # auth user info paths
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    # student info paths
    path('students/', students_list),
    path('students/<int:pk>/', students_by_id),
    path('points/<int:pk>/', students_points),
    # # teacher info paths
    # path('teachers/', teachers_list),
    # path('teachers/<int:pk>/', teachers_by_id),
    # users info path
    path('users/', users_list),
]
