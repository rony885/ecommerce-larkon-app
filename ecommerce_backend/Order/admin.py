# from django.contrib import admin
# from .models import Order, OrderItem


# class OrderItemInline(admin.TabularInline):
#     model = OrderItem
#     extra = 0


# class OrderAdmin(admin.ModelAdmin):
#     list_display = (
#         'order_number',
#         'user',
#         'subtotal',
#         'discount',
#         'delivery_charge',
#         'total_amount',
#         'order_status',
#         'created_at'
#     )
#     list_filter = ('order_status', 'created_at')
#     inlines = [OrderItemInline]


# admin.site.register(Order, OrderAdmin)
# admin.site.register(OrderItem)

from django.contrib import admin
from .models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'order_number',
        'client',
        'product',
        'order_status',
        'total_amount',
        'date'
    )

    list_filter = ('order_status', 'date')
    search_fields = ('order_number', 'client')

