from rest_framework import serializers
from .models import FilmeSerie

class FilmeSerieSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilmeSerie
        fields = '__all__'