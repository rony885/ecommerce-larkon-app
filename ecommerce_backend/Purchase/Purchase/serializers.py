# from rest_framework import serializers
# from .models import Purchase

# class PurchaseSerializer(serializers.ModelSerializer):
#     supplier_name = serializers.CharField(
#         source="supplier.name",
#         read_only=True
#     )
#     product_name = serializers.CharField(
#         source="product.name",
#         read_only=True
#     )

#     class Meta:
#         model = Purchase
#         fields = [
#             "id",
#             "supplier",
#             "supplier_name",
#             "product",
#             "product_name",
#             "purchase_date",
#             "quantity",
#             "unit_price",
#             "total_price",
#             "created_at",
#         ]
#         read_only_fields = ["total_price", "purchase_date"]



# from rest_framework import serializers
# from .models import Purchase
# from Settings.models import Supplier
# from Settings.serializers import SupplierSerializer

# class PurchaseSerializer(serializers.ModelSerializer):
#     # READ (nested object)
#     supplier = SupplierSerializer(read_only=True)

#     # WRITE (ID only)
#     supplier_id = serializers.PrimaryKeyRelatedField(
#         queryset=Supplier.objects.all(),
#         source="supplier",
#         write_only=True
#     )

#     product_name = serializers.CharField(
#         source="product.name",
#         read_only=True
#     )

#     class Meta:
#         model = Purchase
#         fields = [
#             "id",
#             "supplier",
#             "supplier_id",
#             "product",
#             "product_name",
#             "purchase_date",
#             "quantity",
#             "unit_price",
#             "total_price",
#             "created_at",
#         ]
#         read_only_fields = [
#             "total_price",
#             "purchase_date",
#             "created_at",
#         ]



from rest_framework import serializers
from .models import Purchase
from Settings.models import Supplier
from Product.models import Product
from Settings.serializers import SupplierSerializer


class PurchaseSerializer(serializers.ModelSerializer):
    # READ ONLY: supplier object
    supplier = SupplierSerializer(read_only=True)

    # READ ONLY: product name
    product_name = serializers.CharField(source="product.name", read_only=True)

    # WRITE ONLY: accept frontend POST (FormData)
    supplier_id = serializers.PrimaryKeyRelatedField(
        queryset=Supplier.objects.all(),
        source="supplier",
        write_only=True,
        required=True
    )

    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(),
        source="product",
        write_only=True,
        required=True
    )

    class Meta:
        model = Purchase
        fields = [
            "id",
            "supplier",      # full object in GET
            "product",       # product ID in GET
            "product_name",  # product name
            "purchase_date",
            "quantity",
            "unit_price",
            "total_price",
            "created_at",
            "supplier_id",   # used in POST only
            "product_id",    # used in POST only
        ]
        read_only_fields = (
            "total_price",
            "purchase_date",
            "created_at",
            "supplier",
            "product_name",
            "product",
        )

