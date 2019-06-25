from django.db import models

class Subscriber(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(
        max_length=255,
        unique=True,
        db_index=True
    )

    def __str__(self):
        return self.name
