from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Supplier, Courier, DeliveryType, Client, GeneralSetting
from .serializers import SupplierSerializer, CourierSerializer, DeliveryTypeSerializer, ClientSerializer, GeneralSettingSerializer     


class SupplierView(viewsets.ModelViewSet):
    queryset = Supplier.objects.all().order_by('-id')
    serializer_class = SupplierSerializer


class CourierView(viewsets.ModelViewSet):
    queryset = Courier.objects.all().order_by('-id')
    serializer_class = CourierSerializer


class DeliveryTypeView(viewsets.ModelViewSet):
    queryset = DeliveryType.objects.all().order_by('-id')
    serializer_class = DeliveryTypeSerializer


class ClientView(viewsets.ModelViewSet):
    queryset = Client.objects.all().order_by('-id')
    serializer_class = ClientSerializer
    
class GeneralSettingView(viewsets.ModelViewSet):
    queryset = GeneralSetting.objects.all().order_by('-id')
    serializer_class = GeneralSettingSerializer
