from django.db import models

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=10)
    category = models.CharField(max_length=100)
    inventory = models.IntegerField(default=1)
    is_available = models.BooleanField('availability status',default=True)
