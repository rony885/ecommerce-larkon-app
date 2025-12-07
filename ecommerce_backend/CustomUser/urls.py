from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from .views import (
    AllUsersView,
    UserRegisterAPIView,
    UserLoginAPIView,
    UserLogoutAPIView,
    CurrentUserAPIView,
    StaffAndSuperuserLoginAPIView
)

router = routers.DefaultRouter()
router.register("all_users", AllUsersView, basename='all_users_view')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', UserRegisterAPIView.as_view(), name='user-register'),
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
    path('current_user/', CurrentUserAPIView.as_view(), name='current-user'),
    path('staff_and_superuser_login/', StaffAndSuperuserLoginAPIView.as_view(), name='staff-and-superuser-login'),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)