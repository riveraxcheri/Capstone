from rest_framework import serializers
from .models import Comments
from authentication.serializers import TeacherSerializer, StudentSerializer, RegistrationSerializer


    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////
class CommentsSerializer(serializers.ModelSerializer):
    user = RegistrationSerializer(many=False, read_only=True)
    receiver = StudentSerializer(many=False, read_only=True)

    class Meta:
        model = Comments
        fields = ['id', 'comm_text', 'pub_date','user','receiver']
        depth = 1

    def create(self):
        comment = Comments.objects.create(
            user = ['user'],
            receiver = ['receiver'],
            comm_text = ['comm_text'],
            pub_date = ['pub_date']
        )
        comment.save()
        return comment