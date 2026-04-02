# from rest_framework import serializers
# from .models import Order, OrderItem
# from django.contrib.auth import get_user_model
# User = get_user_model()


# class OrderItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderItem
#         fields = '__all__'


# class OrderSerializer(serializers.ModelSerializer):
#     items = OrderItemSerializer(many=True, read_only=True)

#     class Meta:
#         model = Order
#         fields = '__all__'
        
# class OrderSerializer(serializers.ModelSerializer):
#     user_name = serializers.CharField(source='user.username', read_only=True)

#     class Meta:
#         model = Order
#         fields = '__all__'


# from rest_framework import serializers
# from .models import Order


# class OrderSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Order
#         fields = '__all__'
#         read_only_fields = ['order_number', 'date']


# from rest_framework import serializers
# from .models import Order

# class OrderSerializer(serializers.ModelSerializer):
#     product_name = serializers.CharField(source="product.name", read_only=True)

#     class Meta:
#         model = Order
#         fields = '__all__'
#         read_only_fields = ['order_number', 'date']



from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(source="product.name", read_only=True)
    # client_name = serializers.CharField(source="client.username", read_only=True)
    client_name = serializers.CharField(source="client.name", read_only=True)
    courier_name = serializers.CharField(source="courier.name", read_only=True)
    delivery_type_name = serializers.CharField(source="delivery_type.name", read_only=True)

    class Meta:
        model = Order
        fields = [
            'id','order_number','invoice_no','date',

            'client','client_name',
            'address',

            'product','product_name',

            'price','quantity',
            'subtotal','discount',
            'total_amount',
            'delivery_charge',

            'payable_amount',
            'paid_amount',
            'due',

            'order_status',

            'courier','courier_name',
            'delivery_type','delivery_type_name'
        ]

        read_only_fields = ['order_number','invoice_no','date']