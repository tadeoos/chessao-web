from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'main/index.html')


def custom404(request):
    response = render(request, 'main/404.html')
    response.status_code = 404
    return response
# def detail(request, poll_id):
#     try:
#         p = Poll.objects.get(pk=poll_id)
#     except Poll.DoesNotExist:
#         raise Http404("Poll does not exist")
#     return
