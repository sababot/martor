# Generated by Django 2.2.13 on 2024-11-20 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0012_auto_20241104_0849'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='side',
            field=models.CharField(choices=[('2', 'Back'), ('1', 'Front')], default='1', max_length=1),
        ),
    ]