# Generated by Django 5.1.2 on 2024-12-24 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_alter_item_category_alter_item_side_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('HA', 'HAT'), ('HO', 'HOODIE'), ('S', 'SHIRT')], max_length=2),
        ),
        migrations.AlterField(
            model_name='orderitem',
            name='size',
            field=models.CharField(choices=[('M', 'Medium'), ('S', 'Small'), ('XL', 'Extra Large'), ('L', 'Large'), ('2XL', 'Double Extra Lage')], max_length=3),
        ),
    ]