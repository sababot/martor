# Generated by Django 2.2.13 on 2024-11-02 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_auto_20241101_1318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('HO', 'HOODIE'), ('HA', 'HAT'), ('S', 'SHIRT')], max_length=2),
        ),
    ]