# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-17 12:07
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('snapshot', '0016_auto_20160617_1917'),
    ]

    operations = [
        migrations.RenameField(
            model_name='photo',
            old_name='owner',
            new_name='visitor',
        ),
    ]
