# Register your models here.

from django.contrib import admin
from .models import Supplier, Courier, DeliveryType, Client, GeneralSetting
from django.utils.html import format_html


@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'status', 'company_name', 'phone', 'email', 'show_logo', 'created_at']
    
    readonly_fields = ['show_logo']
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
    
    def show_logo(self, obj):
        if obj.logo:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.logo.url)
        return "No Image"
    show_logo.short_description = 'logo'


@admin.register(Courier)
class CourierAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'email', 'amount', 'status', 'created_at']
    
    readonly_fields = []
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(DeliveryType)
class DeliveryTypeAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'duration', 'cost', 'status', 'created_at']
    
    readonly_fields = []
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'status', 'phone', 'email',  'show_image', 'created_at']
    
    readonly_fields = ['show_image']
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
    
    def show_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.image.url)
        return "No Image"
    show_image.short_description = 'Image'
    
    
@admin.register(GeneralSetting)
class GeneralSettingAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'email',  'show_logo', 'created_at']
    
    readonly_fields = ['show_logo']
    
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
    
    def show_logo(self, obj):
        if obj.logo:
            return format_html('<img src="{}" width="50" height="50" style="object-fit: cover; border-radius: 5px;" />', obj.logo.url)
        return "No Image"
    show_logo.short_description = 'Image'
