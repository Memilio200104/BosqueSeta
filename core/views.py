from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers import serialize
from .models import Productor
from django.utils.safestring import mark_safe
import json

# Create your views here.
def home(request):
    return render(request, 'index.html')


def index(request):
    # Obtener todos los productores con los campos necesarios
    productores = Productor.objects.all().values('id', 'nombre', 'direccion', 'latitud', 'longitud')
    
    # Convertir a lista y asegurar que las coordenadas son números
    productores_list = []
    for p in productores:
        try:
            # Convertir coordenadas a float
            p['latitud'] = float(p['latitud']) if p['latitud'] is not None else None
            p['longitud'] = float(p['longitud']) if p['longitud'] is not None else None
            productores_list.append(p)
        except (TypeError, ValueError):
            # Manejar valores inválidos
            continue
    
    # Pasar los datos como contexto
    return render(request, 'index.html', {
        'productores': productores_list  # Pasamos la lista directamente al contexto
    })