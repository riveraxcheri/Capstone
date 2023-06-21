from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Student, User


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.is_student:
            Student.objects.create(user=instance)
            return sender

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    if instance.is_student:
        instance.student.save()
        return sender



