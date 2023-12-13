from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    body = RichTextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    def snippet(self):
        return self.body[:50] + '...'
    
    def pub_date_pretty(self):
        return self.created_at.strftime('%b %e %Y')

class Materia(models.Model):
    nome = models.CharField(max_length=255)
    semestreAno = models.CharField(max_length=55)