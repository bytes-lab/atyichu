from __future__ import unicode_literals

import os
from django.conf import settings
import django_rq
from .models import Stamp, PhotoStamp
from utils.api import ImaggaAPI


def fetch_tags(sender, instance, created, **kwargs):
    """ Putting task of fetching tags into django_rq queue """
    if not settings.DEBUG:
        django_rq.enqueue(tags_task, instance, created)


def tags_task(instance, created):
    """ Used with Photo model to receive tags from Imagga by image file."""
    if instance and created:
        if not instance.thumb:
            return
        path = instance.thumb.path
        if path and os.path.isfile(path):
            api = ImaggaAPI()
            response = api.get_tags_by_filepath(path,
                                                language=settings.IMAGGA_LANG)
            # No need exception handling on this stage
            tags = response['results'][0]['tags']

            for i in tags:
                stamp, _ = Stamp.objects.get_or_create(title=i['tag'])
                PhotoStamp.objects.create(photo=instance, stamp=stamp,
                                          confidence=i['confidence'])
