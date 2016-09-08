# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-09-08 12:48
from __future__ import unicode_literals

from django.db import migrations, models
import utils.utils


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0013_commodity_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='cover',
            field=models.ImageField(blank=True, null=True, upload_to=utils.utils.UploadPath('gallery/covers', 'commodity', suff='cover'), verbose_name='Cover photo'),
        ),
    ]
