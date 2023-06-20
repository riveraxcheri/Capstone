from django.db import models
from authentication.models import Teacher, Student, User
from django.utils import timezone
import datetime


    # ////
    # Need to Address:
    # 'int' not iterable
    # Maybe need to select either Student or Teacher, Not just User
    # ////

class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    comm_text = models.CharField(max_length=300, verbose_name='comment text')
    pub_date= models.DateTimeField(("date posted"), default=timezone.now)

    # def __str__(self):
    #     return self.comm_text