from django.contrib.auth import get_user_model
# from django.shortcuts import render
# from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..models import Student, Teacher
from ..serializers import StudentSerializer, TeacherSerializer
# from django.shortcuts import get_object_or_404
User = get_user_model()

@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_students(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)

@api_view (['GET'])
@permission_classes([AllowAny])
def get_all_teachers(request):
    teachers = Teacher.objects.all()
    serializer = TeacherSerializer(teachers, many=True)
    return Response(serializer.data)