
from django.contrib import admin
from .models import Purchase

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = (
        "supplier",
        "product",
        "quantity",
        "unit_price",
        "total_price",
        "purchase_date",
    )
