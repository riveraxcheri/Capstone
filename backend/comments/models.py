from django.db import models
from authentication.models import User




class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    comm_text = models.CharField(max_length=300, verbose_name='comment text')

    def __str__(self):
        return f"{self.user.username}"