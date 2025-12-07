from rest_framework import serializers
from .models import Supplier, Courier, DeliveryType, Client, GeneralSetting


class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'


class CourierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Courier
        fields = '__all__'


class DeliveryTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryType
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class GeneralSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralSetting
        fields = '__all__'
