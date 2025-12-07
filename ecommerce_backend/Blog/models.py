from django.db import models

# Create your models here.

class Blog(models.Model):
    
    status = models.BooleanField(default=True)
    title = models.CharField(max_length=255)
    pub_date = models.DateField(auto_now=True)
    pub_time = models.TimeField(auto_now=True)
    author = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='uploads/images/blog/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

