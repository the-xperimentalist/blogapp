from django.db import models
from accounts.models import Writer
from django.conf import settings

class Category(models.Model):
    name = models.CharField(max_length=127,null=False)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=255,null=False)
    subtitle = models.CharField(max_length=255,null=True)
    description = models.TextField()
    created_by = models.ForeignKey(Writer, on_delete=models.SET_NULL, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    categories = models.ManyToManyField(Category)
    no_of_claps = models.IntegerField(null=True)
    published = models.BooleanField(default=False)
    related_img = models.ImageField(upload_to='article_imgs/', default='article_imgs/default.jpg')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.published and self.no_of_claps:
            raise IntegrityError("No claps possible as the article is not published yet")

        super(Article, self).save(*args, **kwargs)

class Comment(models.Model):
    comment_text = models.CharField(max_length=255, null=False)
    commented_by = models.ForeignKey(Writer, on_delete=models.CASCADE)
    commented_article = models.ForeignKey(Article, on_delete=models.CASCADE)
    no_of_claps = models.IntegerField(default=0)

    def __str__(self):
        return self.comment_text
