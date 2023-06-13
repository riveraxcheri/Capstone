from django.contrib.auth import get_user_model
# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..models import Student, Teacher
from ..serializers import StudentSerializer, TeacherSerializer, MyTokenObtainPairSerializer
from django.shortcuts import get_object_or_404
User = get_user_model()

@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)

@api_view (['PUT', 'DELETE'])
@permission_classes([AllowAny])
def update_students(request, pk):
    students = get_object_or_404 (Student, pk=pk)
    serializer = StudentSerializer(students, data=request.data)
    if request.method == 'PUT':
        if serializer.is_valid(raise_exception=True):
            serializer.save(data=request.data)
            return Response(serializer.data)
    elif request.method == 'DELETE':
        Student.delete(pk=pk)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)


@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_teachers(request):
    teachers = Teacher.objects.all()
    serializer = TeacherSerializer(teachers, many=True)
    return Response(serializer.data)

@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_users(request):
    users = User.objects.all()
    serializer = MyTokenObtainPairSerializer(users, many=True)
    return Response(serializer.data)