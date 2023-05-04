from django.urls import path
from . import views

urlpatterns = [
    path('', views.profiles, name='profiles'),

    path('login/', views.loginUser, name="login"),

    path('inbox/', views.inbox, name="inbox"),
]
