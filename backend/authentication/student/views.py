from django.contrib.auth import get_user_model
# from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from ..serializers import RegistrationSerializer, StudentSerializer
from authentication.models import User, Student
from django.shortcuts import get_object_or_404
User = get_user_model()

# STUDENTS INFO ///

# GET_ALL  
# path= 'students/'
@api_view (['GET']) # DONE
@permission_classes([AllowAny])
def students_list(request):
    students = User.objects.filter(is_student=True)
    serializer = RegistrationSerializer(students, many=True)
    return Response(serializer.data)

# GET_BY_ID / DELETE
# path= 'students/<int:pk>/'
@api_view (['GET','DELETE'])
@permission_classes([IsAuthenticated])
def students_by_id(request, pk):
    user = User.objects.filter(is_student=True)
    user = get_object_or_404(user, pk=pk)

    if request.method == 'GET': # DONE
        serializer = RegistrationSerializer(user)
        return Response(serializer.data)
    if request.method == 'DELETE': # DONE
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
# /// INFO END

# STUDENTS POINTS /// 

# path= 'points/<int:pk>/'

# GET POINTS / UPDATE POINTS
@api_view (['GET','PUT'])
@permission_classes([AllowAny])
def students_points(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'GET': # DONE
        serializer = StudentSerializer(student)
        return Response(serializer.data)
# UPDATE POINTS
    elif request.method == 'PUT': # DONE
        serializer = StudentSerializer(student, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
# /// POINTS END

# USERS INFO ///

# path= 'users/'
@api_view (['GET'])
@permission_classes([IsAuthenticated])
def users_list(request):
    users = User.objects.all()
    request.method == 'GET' # DONE
    serializer = RegistrationSerializer(users, many=True)
    return Response(serializer.data)
# /// USERS END
