import os
from django.contrib.auth.models import User


admin_email = 'admin@example.com'
if not User.objects.all():
    User.objects.create_superuser(
        os.environ['ADMIN_USER_NAME'],
        admin_email,
        os.environ['ADMIN_PASSWORD'],
    )
