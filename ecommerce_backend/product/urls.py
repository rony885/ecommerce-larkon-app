# from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet, BrandViewSet, UnitViewSet, ProductViewSet

# router = DefaultRouter()
# router.register(r'category', CategoryViewSet)
# router.register(r'brand', BrandViewSet)
# router.register(r'unit', UnitViewSet)
# router.register(r'product', ProductViewSet)

# urlpatterns = router.urls


from django.urls import path, include
from rest_framework import routers
from .views import CategoryView, BrandView, UnitView, ProductView

router = routers.DefaultRouter()
router.register('category', CategoryView, basename='category_view')
router.register('brand', BrandView, basename='brand_view')
router.register('unit', UnitView, basename='unit_view')
router.register('product', ProductView, basename='product_view')

urlpatterns = [
    path('product_api/', include(router.urls)),
]
