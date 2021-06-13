from django import forms
from .models import *

class Photoform(forms.ModelForm):
    class Meta:
        model = Images
        fields = ['Upload_photo']