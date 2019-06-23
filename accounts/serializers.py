from rest_framework import serializers
from django.contrib.auth import authenticate

from accounts.models import Writer

class RegistrationSerializer(serializers.ModelSerializer):

    password = serializers.CharField(max_length=128,
                                     min_length=8,
                                     write_only=True)

    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = Writer
        exclude = ('followers',)

    def create(self, validated_data):

        return Writer.objects.create_user(**validated_data)

class LoginSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=128,
                                     min_length=8,
                                     write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    email = serializers.CharField(max_length=255)

    def validate(self, data):

        email = data["email"]
        password = data["password"]

        if email is None or password is None:
            raise serializers.ValidationError('No user found')

        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError("User not found")

        return {
            'email': user.email,
            'token': user.token
        }

class WriterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
                max_length=128,
                min_length=8,
                write_only=True
                )

    class Meta:
        model = Writer
        fields = '__all__'

        read_only_fields = ('token',)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)

        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance
