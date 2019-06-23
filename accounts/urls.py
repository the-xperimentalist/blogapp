
from django.urls import path
from accounts.views import *

urlpatterns = [
    path('writers/signup/', RegistrationAPIView.as_view(), name='writer-registration'),
    path('writers/signin/', LoginAPIView.as_view(), name='writer-login'),
    path('writer/<int:id>/', WriterRetrieveUpdateAPIView.as_view(), name='writer-retrieve-update')
]
