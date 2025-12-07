# from rest_framework.routers import DefaultRouter
# from .views import BlogViewSet

# router = DefaultRouter()
# router.register(r'blogs', BlogViewSet)

# urlpatterns = router.urls


from django.urls import path, include
from rest_framework import routers
from .views import BlogView

router = routers.DefaultRouter()
router.register('blog', BlogView, basename='blog_view')

urlpatterns = [
    path('blog_api/', include(router.urls)),
]

