from rest_framework.serializers import ModelSerializer
from base.models import Note, Product,APIs
from rest_framework import serializers


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'




class APIsSerializer(serializers.ModelSerializer):
    class Meta:
        model=APIs
        fields='__all__'




