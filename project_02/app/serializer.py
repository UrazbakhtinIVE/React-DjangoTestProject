from rest_framework import serializers
from .models import *

class ReactSeializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']