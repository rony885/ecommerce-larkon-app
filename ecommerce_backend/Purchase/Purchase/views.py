# from django.shortcuts import render

# from rest_framework import viewsets
# from .models import Purchase
# from .serializers import PurchaseSerializer

# class PurchaseView(viewsets.ModelViewSet):
#     queryset = Purchase.objects.all().order_by("-id")
#     serializer_class = PurchaseSerializer

from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Purchase
from .serializers import PurchaseSerializer

class PurchaseView(viewsets.ModelViewSet):
    queryset = Purchase.objects.all().order_by("-id")
    serializer_class = PurchaseSerializer
    parser_classes = (FormParser, MultiPartParser)  # To accept FormData



