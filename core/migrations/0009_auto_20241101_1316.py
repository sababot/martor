# Generated by Django 2.2.13 on 2024-11-01 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20240623_1522'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='user',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='user',
            field=models.CharField(max_length=40),
        ),
    ]
