# from rest_framework import serializers
# from .models import Category, Brand, Unit, Product


# class CategorySerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)

#     class Meta:
#         model = Category
#         fields = '__all__'


# class BrandSerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)

#     class Meta:
#         model = Brand
#         fields = '__all__'


# class UnitSerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)

#     class Meta:
#         model = Unit
#         fields = '__all__'


# class ProductSerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)
#     category = CategorySerializer()
#     brand = BrandSerializer()
#     unit = UnitSerializer()


#     class Meta:
#         model = Product
#         fields = '__all__'


# class ProductSerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)
#     category = CategorySerializer(read_only=True)
#     brand = BrandSerializer(read_only=True)
#     unit = UnitSerializer(read_only=True)

#     class Meta:
#         model = Product
#         fields = '__all__'


from rest_framework import serializers
from .models import Category, Brand, Unit, Product
import re


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unit
        fields = '__all__'


class ProductWriteSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), allow_null=True)
    brand = serializers.PrimaryKeyRelatedField(queryset=Brand.objects.all())
    unit = serializers.PrimaryKeyRelatedField(queryset=Unit.objects.all())

    class Meta:
        model = Product
        fields = '__all__'


class ProductReadSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    brand = BrandSerializer()
    unit = UnitSerializer()
    description = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_description(self, obj):
        """Remove HTML tags like <p>, <br>, etc. from the description."""
        clean_text = re.sub(r'<.*?>', '', obj.description or '')
        return clean_text.strip()
