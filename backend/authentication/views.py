from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, StudentSerializer, TeacherSerializer
from .models import Student, Teacher
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.viewsets import ModelViewSet
User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer



class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated)
    serializer_class = RegistrationSerializer

class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    permission_classes = (IsAuthenticated)
    serializer_class = StudentSerializer


class TeacherViewSet(ModelViewSet):
    queryset = Teacher.objects.all()
    permission_classes = (IsAuthenticated)
    serializer_class = TeacherSerializer
