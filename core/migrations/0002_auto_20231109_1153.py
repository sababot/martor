# Generated by Django 2.2.13 on 2023-11-09 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('HO', 'HOODIE'), ('HA', 'HAT'), ('S', 'SHIRT')], default='S', max_length=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='collection',
            field=models.CharField(choices=[('1', 'Fall To Rise')], default='1', max_length=1),
            preserve_default=False,
        ),
    ]