from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Student

class CustomUserAdmin(UserAdmin):
    pass

# Register your models here.
admin.site.register([User, Student])


# CustomUserAdmin