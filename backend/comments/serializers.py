from rest_framework import serializers
from .models import Comments
from authentication.serializers import RegistrationSerializer


class CommentsSerializer(serializers.ModelSerializer):
    user = RegistrationSerializer(many=False, read_only=True)

    class Meta:
        model = Comments
        fields = ['id', 'comm_text', 'pub_date','user']
        depth = 1
