from django.contrib.auth import get_user_model
# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..serializers import RegistrationSerializer, StudentSerializer
from authentication.models import User, Teacher, Student
from django.shortcuts import get_object_or_404
User = get_user_model()

# STUDENTS INFO ///
# GET_ALL *DONE* path= 'students/'
@api_view (['GET'])
@permission_classes([AllowAny])
def students_list(request):
    students = User.objects.filter(is_student=True)
    serializer = RegistrationSerializer(students, many=True)
    return Response(serializer.data)
# GET_BY_ID *DONE* path= 'students/<int:pk>/'
@api_view (['GET'])
@permission_classes([IsAuthenticated])
def students_by_id(request, pk):
    user = User.objects.filter(is_student=True)
    user = get_object_or_404(user, pk=pk)
    serializer = RegistrationSerializer(user)
    # RETRIEVE
    if request.method == 'GET': # DONE
        serializer = RegistrationSerializer(user)
        return Response(serializer.data)
# ///
#--IN PROGRESS:
# STUDENTS POINTS /// path= 'points/<int:pk>/'
@api_view (['GET','PUT'])
@permission_classes([IsAuthenticated])
def students_points(request, pk):
    student = get_object_or_404(Student, pk=pk)
# RETRIEVE POINTS
    if request.method == 'GET': # DONE
        serializer = StudentSerializer(student)
        return Response(serializer.data)
# UPDATE POINTS
    elif request.method == 'PUT': # DONE
        serializer = StudentSerializer(student, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

# TEACHERS INFO /// *DONE* 
# ALL_ TEACHERS_LIST path= 'teachers/'
@api_view (['GET'])
@permission_classes([AllowAny])
def teachers_list(request):
    teachers = User.objects.filter(is_teacher=True)
    if request.method == 'GET':
        serializer = RegistrationSerializer(teachers, many=True)
        return Response(serializer.data)
    
# TEACHER DETAIL path= 'teachers/<int:pk>/'
@api_view (['GET'])
@permission_classes([IsAuthenticated])
def teachers_by_id(request, pk):
    user = User.objects.filter(is_teacher=True)
    user = get_object_or_404(user, pk=pk)
    serializer = RegistrationSerializer(user)
    if request.method == 'GET': # DONE
        serializer = RegistrationSerializer(user)
        return Response(serializer.data)


# USERS INFO /// *DONE* path= 'users/'
@api_view (['GET'])
@permission_classes([IsAuthenticated])
def users_detail(request):
    users = User.objects.all()
    request.method == 'GET'
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)

