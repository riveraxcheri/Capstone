from django.contrib.auth import get_user_model
# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..signals import save_user_profile, create_user_profile
from ..models import Student, Teacher
from ..serializers import StudentSerializer, TeacherSerializer, MyTokenObtainPairSerializer, RegistrationSerializer
from django.shortcuts import get_object_or_404
User = get_user_model()

# STUDENTS INFO ///
# GET_ALL *DONE*
@api_view (['GET'])
@permission_classes([AllowAny])
def students_list(request):
    students = User.objects.filter(is_student=True)
    serializer = RegistrationSerializer(students, many=True)
    return Response(serializer.data)
# ///
#--IN PROGRESS:
# STUDENTS BY ID ///
@api_view (['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def students_by_id(request, pk):
    students = User.objects.filter(is_student=True, pk=pk)
    # serializer = RegistrationSerializer(students, data=request.data)
# RETRIEVE
    if request.method == 'GET':
        serializer = RegistrationSerializer(students)
        return Response (serializer.data)
    # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # if serializer.is_valid():
        #     students.get(serializer.data)
# UPDATE
    elif request.method == 'PUT':
        serializer = StudentSerializer(students, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# DELETE
    elif request.method == 'DELETE':
        students.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
# CREATE /// *Not Applicable- Read Only* ///
# @api_view (['POST'])
# @permission_classes([IsAuthenticated])
# def add_student(request):
#     students = User.objects.filter(is_student=True)
#     serializer = RegistrationSerializer(students, data=request.data)
#     if request.method == 'POST':
#         if serializer.is_valid(raise_exception=True):
#             create_user_profile()
#             serializer.save(data=request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# TEACHERS INFO /// *DONE*
@api_view (['GET'])
@permission_classes([AllowAny])
def teachers_detail(request):
    teachers = User.objects.filter(is_teacher=True)
    serializer = RegistrationSerializer(teachers, many=True)
    return Response(serializer.data)
# USERS INFO /// *DONE*
@api_view (['GET'])
@permission_classes([AllowAny])
def users_detail(request):
    users = User.objects.all()
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)

# Reference from Comments API: ///
    # text = request.query_params.get('t')
    # comments = Comment.objects.all()
    # if text:
    #     comments = comments.filter(text=text)
    #     serializer = CommentSerializer(comments, many=True)
    #     return Response(serializer.data)
    # comments = Comment.objects.filter(video_id=video_id)
    # serializer = CommentSerializer(comments, many=True)
    # return Response(serializer.data)