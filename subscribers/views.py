
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.mail import send_mail
from django.conf import settings

from subscribers.serializers import SubscriberSerializer

class SubscriberAPI(APIView):

    def post(self, request, *args, **kwargs):
        serializer = SubscriberSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"Message": "You have subscribed successfully"})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
