from django.shortcuts import render
from .models import Post, Materia

# Create your views here.
def post(request, post_id):
    post = Post.objects.get(pk=post_id)
    materias = Materia.objects.all()
    context = {
        'post': post,
        'materias': materias,
    }
    return render(request, 'PortApp/post.html', context)