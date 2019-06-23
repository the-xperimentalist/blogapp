from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError
import logging
from rest_framework.generics import RetrieveUpdateAPIView
from accounts.models import Writer

from accounts.serializers import RegistrationSerializer, LoginSerializer, WriterSerializer

class RegistrationAPIView(APIView):

    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

    def post(self, request):
        try:
            user = request.data

            serializer = self.serializer_class(data=user)
            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except:
            logging.exception("Got exception")
            return Response(status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        try:
            user = request.data

            serializer = self.serializer_class(data=user)
            serializer.is_valid(raise_exception=True)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except ValidationError:
            return_json = {"Message": "User does not exist"}
            return Response(return_json, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class WriterRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = WriterSerializer
    queryset = Writer.objects.all()
    lookup_url_kwarg = 'id'

    def retrieve(self, request, *args, **kwargs):

        instance = self.get_object()
        serializer = self.serializer_class(instance)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        serializer = self.serializer_class(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)
