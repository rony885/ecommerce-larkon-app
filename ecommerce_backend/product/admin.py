from django.contrib import admin
from .models import Category, Brand, Unit, Product
from django.utils.html import format_html


# --- CATEGORY ADMIN ---
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'status', 'show_image', 'created_at', 'updated_at']
    readonly_fields = ['show_image']
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']

    def show_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.image.url)
        return "No Image"
    show_image.short_description = 'Image'


# --- BRAND ADMIN ---
@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'status', 'created_at', 'updated_at']
    readonly_fields = []
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


# --- UNIT ADMIN ---
@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'status', 'created_at', 'updated_at']
    readonly_fields = []
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


# --- PRODUCT ADMIN ---
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'category', 'brand', 'unit', 'price', 'stock', 'status', 'show_image', 'created_at']
    readonly_fields = ['show_image']
    search_fields = ('name', 'brand__name', 'category__name')
    list_per_page = 10
    list_filter = ['created_at', 'category', 'brand', 'unit']

    def show_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.image.url)
        return "No Image"
    show_image.short_description = 'Image'
