from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User, Teacher, Student
from .models import Comments
from .serializers import CommentsSerializer
from django.shortcuts import get_object_or_404

# /// Need to Address:
#            ^
# TypeError: 'int' object is not iterable
# [19/Jun/2023 07:03:18] "GET /api/comments/ HTTP/1.1" 500 131041
# ///

   # COMMENTS: #GET , #POST , #DELETE
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated]) 
def user_comments_detail(request, pk):
    comments = Comments.objects.filter(pk=pk)
    if request.method == 'GET':
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CommentsSerializer(comments, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data) 
    elif request.method == 'DELETE':
        comments.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comments_list(request):
    if request.method == 'GET':
        comments = Comments.objects.all()
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# GET ALL for my purposes:
# @api_view(['GET'])
# @permission_classes([AllowAny])
# def all_comments(request):
#     request.method == 'GET'
#     comments=Comments.objects.all()
#     serializer = CommentsSerializer(comments, many=True)
#     return Response(serializer.data)

# GET by Teacher User
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def comm_by_tch_id(request, pk):
#     request.method == 'GET'
#     comments = get_object_or_404(Comments, pk=pk)
#     serializer = CommentsSerializer(comments, many=True)
#     return Response(serializer.data)


# GET by Student User Id
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def comm_by_stu_id(request, pk):
#     user = User.objects.filter(is_student=True)
#     if user:
#         user.pk=pk
#         request.method == 'GET'
#         comments = get_object_or_404(Comments)
#         serializer = CommentsSerializer(comments, many=True)

#         return Response(serializer.data)
# IDEAS
   # MESSAGES BOARD for User's Page (their "comment history")


# @api_view(['GET'])
# @permission_classes([IsAuthenticated]) 
# def comments_list(request, pk):
#     request.method == 'GET'
#     comments = Comments.objects.all()
#     serializer = CommentsSerializer(comments, pk=pk)
#     return Response(serializer.data)
    

# # Reference from Comments API: ///
    # text = request.query_params.get('t')
    # comments = Comment.objects.all()
    # if text:
    #     comments = comments.filter(text=text)
    #     serializer = CommentSerializer(comments, many=True)
    #     return Response(serializer.data)
    # comments = Comment.objects.filter(video_id=video_id)
    # serializer = CommentSerializer(comments, many=True)
    # return Response(serializer.data)