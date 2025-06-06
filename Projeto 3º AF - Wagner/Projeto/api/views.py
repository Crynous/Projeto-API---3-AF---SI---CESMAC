from rest_framework import viewsets
from .models import FilmeSerie
from .serializers import FilmeSerieSerializer
from rest_framework.permissions import IsAuthenticated

class FilmeSerieViewSet(viewsets.ModelViewSet):
    queryset = FilmeSerie.objects.all()
    serializer_class = FilmeSerieSerializer
    permission_classes = [IsAuthenticated]