# Generated by Django 2.2.13 on 2024-06-23 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20240429_1541'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitem',
            name='ordered',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='user',
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('S', 'SHIRT'), ('HO', 'HOODIE'), ('HA', 'HAT')], max_length=2),
        ),
    ]