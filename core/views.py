from django.shortcuts import render
from .models import Productor
# Create your views here.
def home(request):
    productores = Productor.objects.all()
    return render(request, 'index.html', {
        'productores': productores
    })
