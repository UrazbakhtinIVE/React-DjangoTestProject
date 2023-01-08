from django.contrib import admin
from .models import *

@admin.register(React)
class EployeeAdmin(admin.ModelAdmin):
    pass