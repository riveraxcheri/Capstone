from rest_framework import serializers
from .models import Comments

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'comm_text', 'datetime','user_id' ]
        depth = 1