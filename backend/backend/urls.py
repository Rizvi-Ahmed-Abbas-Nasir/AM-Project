# backend/urls.py

from django.contrib import admin
from django.urls import path
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('auth/',include('drf_social_oauth2.urls',namespace='drf')), # add this
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('.*', TemplateView.as_view(template_name='index.html')),
]
