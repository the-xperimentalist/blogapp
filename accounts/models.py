import jwt

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class WriterManager(BaseUserManager):

    def create_user(self, *args, **kwargs):
        if not 'email' in kwargs or not 'password' in kwargs or not 'name' in kwargs:
            raise ValueError('missing credentials')
        user = self.model(*args, **kwargs)
        user.set_password(kwargs['password'])
        user.save(using=self._db)
        return user


class Writer(AbstractBaseUser):
    email = models.EmailField(
        max_length=255,
        unique=True,
        db_index=True
    )
    profile_img = models.ImageField(upload_to='profile_imgs', default='profile_imgs/default.png')
    followers = models.ManyToManyField('self', related_name='followers')
    description = models.TextField()
    name = models.CharField(max_length=255, blank=False, null=False)

    objects = WriterManager()

    USERNAME_FIELD = 'email'

    def get_full_name(self):
        return self.name

    def __str__(self):
        return self.name

    @property
    def token(self):

        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        token = jwt.encode({
            'id': self.pk
            }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
