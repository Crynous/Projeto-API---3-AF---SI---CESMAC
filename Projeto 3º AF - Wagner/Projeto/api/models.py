from django.db import models

class FilmeSerie(models.Model):
    TIPO_CHOICES = (
        ('Filme', 'Filme'),
        ('Série', 'Série')
    )

    titulo = models.CharField(max_length=200)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    genero = models.CharField(max_length=100)
    ano_lancamento = models.PositiveIntegerField()
    sinopse = models.TextField()

    def __str__(self):
        return f"{self.titulo} ({self.tipo})"