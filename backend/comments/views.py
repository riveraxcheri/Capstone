from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from authentication.models import User
from .models import Comments
from .serializers import CommentsSerializer
from django.shortcuts import get_object_or_404


#GET All Comments
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_comments(request):
    request.method == 'GET' #Done
    comments = Comments.objects.all()
    serializer = CommentsSerializer(comments, many=True)
    return Response(serializer.data)

#CREATE Comment
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_post_comm(request):
    if request.method == 'POST': #Done
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#GET Comments by user_id
#DELETE Comment
@api_view(['GET','DELETE']) #Done
@permission_classes([IsAuthenticated]) 
def user_comm(request, pk):
    comment = get_object_or_404(Comments, pk=pk)
    if request.method == 'GET':
        serializer = CommentsSerializer(comment)
        return Response(serializer.data)
    if request.method == 'DELETE':
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

