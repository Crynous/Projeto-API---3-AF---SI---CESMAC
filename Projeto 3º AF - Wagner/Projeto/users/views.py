from rest_framework import viewsets
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

#    def perform_create(self, serializer):
#        print("Usuário autenticado:", self.request.user)
#        serializer.save(usuario=self.request.user)
    