from rest_framework import serializers
from .models import Comments
from authentication.serializers import RegistrationSerializer
from authentication.models import User

    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
class CommentsSerializer(serializers.ModelSerializer):
    user_id = RegistrationSerializer(many=True, read_only=True)

    class Meta:
        model = Comments
        fields = ['id', 'comm_text', 'pub_date','user_id' ]
        depth = 1

    def create(self):
        comment = Comments.objects.create(
            user = ['user'],
            comm_text = ['comm_text'],
            pub_date = ['pub_date']
        )
        comment.save()
        return comment