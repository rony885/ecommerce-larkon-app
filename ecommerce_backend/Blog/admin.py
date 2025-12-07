# Register your models here.

from django.contrib import admin
from django.utils.html import format_html
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'title', 'author', 'short_description', 'show_image', 'pub_date', 'pub_time']
    
    readonly_fields = ['show_image']
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']

    def short_description(self, obj):
        if obj.description:
            return obj.description[:60] + ('...' if len(obj.description) > 60 else '')
        return "No Description"
    short_description.short_description = "Description"

    def show_image(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="80" height="60" style="object-fit: cover; border-radius: 5px;" />',
                obj.image.url
            )
        return "No Image"
    show_image.short_description = "Image"

