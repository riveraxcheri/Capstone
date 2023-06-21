# Generated by Django 4.2.2 on 2023-06-21 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Indicator for code to not open a new cart if one is already active'),
        ),
    ]