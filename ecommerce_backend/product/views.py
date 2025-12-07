# from django.shortcuts import render

# Create your views here.

# from rest_framework import viewsets
# from .models import Category, Brand, Unit, Product
# from .serializers import CategorySerializer, BrandSerializer, UnitSerializer, ProductSerializer

# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     pagination_class = None  # 👈 disables pagination for this endpoint only

# class BrandViewSet(viewsets.ModelViewSet):
#     queryset = Brand.objects.all()
#     serializer_class = BrandSerializer
#     pagination_class = None  # 👈 disables pagination for this endpoint only

# class UnitViewSet(viewsets.ModelViewSet):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer
#     pagination_class = None  # 👈 disables pagination for this endpoint only

# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     pagination_class = None  # 👈 disables pagination for this endpoint only



# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework import viewsets
# from .models import Category, Brand, Unit, Product
# from .serializers import CategorySerializer, BrandSerializer, UnitSerializer, ProductSerializer


# # --- CATEGORY VIEWSET ---
# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer


# # --- BRAND VIEWSET ---
# class BrandViewSet(viewsets.ModelViewSet):
#     queryset = Brand.objects.all()
#     serializer_class = BrandSerializer


# # --- UNIT VIEWSET ---
# class UnitViewSet(viewsets.ModelViewSet):
#     queryset = Unit.objects.all()
#     serializer_class = UnitSerializer


# # --- PRODUCT VIEWSET ---
# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer


from rest_framework import viewsets
from .models import Category, Brand, Unit, Product
from .serializers import (
    CategorySerializer,
    BrandSerializer,
    UnitSerializer,
    ProductReadSerializer,
    ProductWriteSerializer
)


# --- CATEGORY VIEW ---
class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


# --- BRAND VIEW ---
class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer


# --- UNIT VIEWT ---
class UnitView(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer


# --- PRODUCT VIEW ---
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()

    def get_serializer_class(self):
        if self.action in ['list', 'retrieve']:
            return ProductReadSerializer  # For GET requests
        return ProductWriteSerializer     # For POST, PUT, PATCH
