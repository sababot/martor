# Generated by Django 2.2.13 on 2023-11-09 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20231109_1334'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='description',
            field=models.TextField(default='default description ñalskjdf ñalksjf ñlaksj fñlkasjf ñlkajsf ñlkjasñflkjasñlkfdj ñlaksjdf ñlkasjdfñlkasjdfñ lkajsñdflk jasñldf jlañksdj fñlaksjdf ñlaksjdf ñlkasjdf ñlkasjf ñlkasj fñlkasjdfñ lkasjf ñlkasjfñl kasjfñ lkasjñf lkjasñdlfk jañslkdfj'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('S', 'SHIRT'), ('HO', 'HOODIE'), ('HA', 'HAT')], max_length=2),
        ),
    ]