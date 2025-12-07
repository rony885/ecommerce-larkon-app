
# from rest_framework import serializers
# from .models import Blog

# class BlogSerializer(serializers.ModelSerializer):
#     status = serializers.BooleanField(default=True)
#     class Meta:
        # model = Blog
        # fields = [
        #     'id',
        #     'status',
        #     'title',
        #     'pub_date',
        #     'pub_time',
        #     'author',
        #     'description',
        #     'image',
        #     'created_at',
        # ]


from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
        class Meta:
                model = Blog  
                fields = '__all__'

