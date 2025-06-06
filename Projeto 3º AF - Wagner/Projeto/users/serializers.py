''' 
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'is_staff']
'''

from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'is_staff']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        #print("DADOS RECEBIDOS:", validated_data) - email com caracteres especiais sem verificação
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

''' 
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'is_staff']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)

'''