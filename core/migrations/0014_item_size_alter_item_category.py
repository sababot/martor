# Generated by Django 5.1.2 on 2024-12-21 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0013_auto_20241120_1017'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='size',
            field=models.CharField(choices=[('XL', 'Extra Large'), ('L', 'Large'), ('2XL', 'Double Extra Lage'), ('S', 'Small'), ('M', 'Medium')], default=1, max_length=3),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('HO', 'HOODIE'), ('HA', 'HAT'), ('S', 'SHIRT')], max_length=2),
        ),
    ]
