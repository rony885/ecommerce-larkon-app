from django.urls import path, include
from rest_framework import routers
from .views import PurchaseView

router = routers.DefaultRouter()
router.register('purchase', PurchaseView, basename='purchase_view')

urlpatterns = [
    path('purchase_api/', include(router.urls)),
]
