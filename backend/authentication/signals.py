from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Teacher, Student, User

# 1st:
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        if instance.is_teacher:
            Teacher.objects.create(user=instance)
        elif instance.is_student:
            Student.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    if instance.is_teacher:
        instance.teacher.save()
    elif instance.is_student:
        instance.student.save()


# / / / Tried something else below, but decided on another way / / /
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         if instance.is_staff:
#             instance.is_teacher = True
#             Teacher.objects.create(user=instance)
#         elif !instance.is_staff:
#             instance.is_student = True
#             Student.objects.create(user=instance)
#             return sender
        
# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     if instance.is_teacher:
#         instance.teacher.save()
#     elif instance.is_student:
#         instance.student.save()
