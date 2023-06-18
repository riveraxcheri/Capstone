from django.contrib.auth import get_user_model
# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..signals import save_user_profile, create_user_profile
from ..serializers import RegistrationSerializer
# from ..serializers import StudentSerializer, TeacherSerializer, MyTokenObtainPairSerializer
# from django.shortcuts import get_object_or_404
User = get_user_model()

# STUDENTS INFO ///
# GET_ALL *DONE* path= 'students/'
@api_view (['GET'])
@permission_classes([AllowAny])
def students_list(request):
    students = User.objects.filter(is_student=True)
    serializer = RegistrationSerializer(students, many=True)
    return Response(serializer.data)
# ///
#--IN PROGRESS:
# STUDENTS BY ID /// path= 'students/<int:pk>/'
@api_view (['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def students_by_id(request, pk):
    students = User.objects.filter(is_student=True, pk=pk)
# RETRIEVE
    if request.method == 'GET':
        serializer = RegistrationSerializer(students)
        return Response (serializer.data)
# UPDATE
    elif request.method == 'PUT':
        if User.objects.filter(is_student=True):
            serializer = RegistrationSerializer(students, data=request.data)
            serializer.is_valid(raise_exception=True)
            save_user_profile(serializer.data)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        elif User.objects.filter(is_teacher=True):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        # if User(is_student=True):
        #     serializer = StudentSerializer(students, data=request.data)
        #     serializer.is_valid(raise_exception=True)
        #     save_user_profile(serializer)
        #     return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        # elif User(is_teacher=True):
        #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
# ALL_ TEACHERS_LIST path= 'teachers/'
@api_view (['GET'])
@permission_classes([AllowAny])
def teachers_list(request):
    teachers = User.objects.filter(is_teacher=True)
    if request.method == 'GET':
        serializer = RegistrationSerializer(teachers, many=True)
        return Response(serializer.data)
    
# TEACHER DETAIL path= 'teachers/<int:pk>/'
@api_view (['GET','PUT'])
@permission_classes([IsAuthenticated])
def teachers_detail(request, pk):
    teachers = User.objects.filter(is_teacher=True, pk=pk)
    if request.method == 'GET':
        serializer = RegistrationSerializer(teachers)
        return Response(serializer.data)
    if request.method == 'PUT':
        if User(is_teacher=True):
            serializer = RegistrationSerializer(teachers, data=request.data)
            serializer.is_valid(raise_exception=True)
            save_user_profile(serializer)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        elif User(is_student=True):
            return Response(status=status.HTTP_400_BAD_REQUEST)


# USERS INFO /// *DONE* path= 'users/'
@api_view (['GET', 'POST'])
@permission_classes([IsAuthenticated])
def users_detail(request):
    users = User.objects.all()
    if request.method == 'GET':
        serializer = RegistrationSerializer(users, many=True)
        return Response(serializer.data)
    # POST
    elif request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            create_user_profile()
            serializer.save(data=request.data)
            save_user_profile()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #     user_permissions
#     students = User.objects.filter(is_student=True)
#     serializer = RegistrationSerializer(students, data=request.data)
#     if request.method == 'POST':
#         if serializer.is_valid(raise_exception=True):
#             create_user_profile()
#             serializer.save(data=request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # / / / REFERENCE
        # serializer = CarSerializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        # return Response(serializer.data, status=status.HTTP_201_CREATED)

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
