from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
from .models import Productor
from django.utils.safestring import mark_safe
import json

# Create your views here.
def home(request):
    productores = Productor.objects.all()
    return render(request, 'index.html', {
        'productores': productores
    })
