# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-15 11:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_auto_20160527_0749'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='store',
        ),
        migrations.RemoveField(
            model_name='kind',
            name='store',
        ),
    ]