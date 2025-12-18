# purchases/urls.py
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import PurchaseViewSet

# router = DefaultRouter()
# router.register(r'purchases', PurchaseViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]



from django.urls import path, include
from rest_framework import routers
from .views import PurchaseView

router = routers.DefaultRouter()
router.register('purchase', PurchaseView, basename='purchase_view')

urlpatterns = [
    path('purchases_api/', include(router.urls)),
]
