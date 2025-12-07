from django.urls import path, include
from rest_framework import routers
from .views import SupplierView, CourierView, DeliveryTypeView, ClientView, GeneralSettingView

router = routers.DefaultRouter()
router.register('supplier', SupplierView, basename='supplier_view')
router.register('courier', CourierView, basename='courier_view')
router.register('delivery_type', DeliveryTypeView, basename='delivery_type_view')
router.register('client', ClientView, basename='client_view')
router.register('generalSettings', GeneralSettingView, basename='generalSettings_view')

urlpatterns = [
    path('settings_api/', include(router.urls)),
]
