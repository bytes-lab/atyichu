# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-10 09:23
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('visitor', '0007_visitorextra'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='visitorextra',
            unique_together=set([('visitor', 'backend')]),
        ),
    ]