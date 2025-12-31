
# from django.contrib import admin
# from .models import Purchase

# @admin.register(Purchase)
# class PurchaseAdmin(admin.ModelAdmin):
#     list_display = (
#         "supplier",
#         "product",
#         "quantity",
#         "unit_price",
#         "total_price",
#         "purchase_date",
#     )


from django.contrib import admin
from .models import Purchase


@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'get_product',
        'get_supplier',
        'quantity',
        'unit_price',
        'total_price',
        'purchase_date',
    )

    def get_product(self, obj):
        return obj.product.name
    get_product.short_description = 'Product'

    def get_supplier(self, obj):
        return obj.supplier.name
    get_supplier.short_description = 'Supplier'

