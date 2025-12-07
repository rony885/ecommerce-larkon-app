from django.db import models


# --- Category Model ---
class Category(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/images/category/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# --- Brand Model ---
class Brand(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# --- Unit Model ---
class Unit(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


# --- Product Model ---
class Product(models.Model):
    status = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category, on_delete=models.DO_NOTHING, blank=True, null=True)
    brand = models.ForeignKey(Brand, on_delete=models.DO_NOTHING, blank=True, null=True)
    unit = models.ForeignKey(Unit, on_delete=models.DO_NOTHING, blank=True, null=True)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    stock = models.IntegerField(default=0)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='uploads/images/product/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


