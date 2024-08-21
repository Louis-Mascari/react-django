from django.db import models

# Create your models here.


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    instructions = models.TextField()

    def __str__(self):
        return self.title
