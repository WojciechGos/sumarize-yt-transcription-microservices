from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_youtube_transcript, name='get_youtube_transcript'),
]
