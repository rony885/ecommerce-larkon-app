
# from django.urls import path
# from .views import order_list_create_view, order_detail_view
# urlpatterns = [
#     path('/order', order_list_create_view, name='order_list_create'),
#     path('</order/int:order_id>/', order_detail_view, name='order_detail'),
# ]


# from django.urls import path
# from .views import OrderListCreateView

# urlpatterns = [
#     path('order/', OrderListCreateView.as_view(), name='order_list_create'),
# ]


from django.urls import path
from .views import OrderListCreateView, OrderDetailView

urlpatterns = [
    path('order/', OrderListCreateView.as_view(), name='order_list_create'),
    path('order/<int:pk>/', OrderDetailView.as_view(), name='order_detail'),
]








