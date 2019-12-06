import uuid

from django.db import models
from django.utils import timezone


class Book(models.Model):

    class Meta:
        db_table = 'book'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name='Title', max_length=20)
    price = models.IntegerField(verbose_name='Price', null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
