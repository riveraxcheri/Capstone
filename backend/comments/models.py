from django.db import models
from authentication.models import User
from django.utils import timezone
import datetime




class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comm_text = models.CharField(max_length=300, verbose_name='comment text')
    pub_date= models.DateTimeField("date published")

    def __str__(self):
        return self.comm_text