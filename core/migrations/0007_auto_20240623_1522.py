# Generated by Django 2.2.13 on 2024-06-23 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_auto_20240623_1437'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('HA', 'HAT'), ('HO', 'HOODIE'), ('S', 'SHIRT')], max_length=2),
        ),
    ]