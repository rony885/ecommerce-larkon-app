# purchases/serializers.py
from rest_framework import serializers
from .models import Purchase

class PurchaseSerializer(serializers.ModelSerializer):
    supplier_name = serializers.CharField(
        source="supplier.name",
        read_only=True
    )
    product_name = serializers.CharField(
        source="product.name",
        read_only=True
    )

    class Meta:
        model = Purchase
        fields = [
            "id",
            "supplier",
            "supplier_name",
            "product",
            "product_name",
            "purchase_date",
            "quantity",
            "unit_price",
            "total_price",
            "created_at",
        ]
        read_only_fields = ["total_price", "purchase_date"]
