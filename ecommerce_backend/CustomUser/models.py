
# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class CustomUser(AbstractUser):
#     phone = models.CharField(max_length=20, blank=True, null=True)
#     address = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.username


# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class CustomUser(AbstractUser):
#     phone = models.CharField(max_length=20, blank=True, null=True)
#     address = models.TextField(blank=True, null=True)

#     image = models.ImageField(
#         upload_to='uploads/images/customUser/',
#         blank=True,
#         null=True
#     )

#     def __str__(self):
#         return self.username

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    image = models.ImageField(
        upload_to='uploads/images/customUser/',
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username