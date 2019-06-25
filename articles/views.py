from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from articles.models import Article, Category, Comment
from articles.serializers import ArticleSerializer, CommentSerializer, CategorySerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from articles.utils import *
from django.db.models import Q


class AuthArticleViewset(viewsets.ViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(published=True)

    def create(self, request, *args, **kwargs):
        """
        Create the article
        """
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def edit_article(self, request, *args, **kwargs):
        """
        Edit unpublished article
        """

        instance = Article.objects.get(id=kwargs["article_id"])

        return super(ArticleViewset, self).partial_update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        """
        Delete the article
        """

        return super(ArticleViewset, self).destroy(request, *args, **kwargs)

    def list_unpublished_writer_articles(self, request, *args, **kwargs):
        """
        List all the unpublished articles written by the writer
        """

        queryset = Article.objects.filter(published=False).filter(created_by__id=kwargs["writer_id"])
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ArticleViewset(viewsets.ViewSet):
    serializer_class = ArticleSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Article.objects.filter(published=True)

    def list_all_published_articles(self, request, *args, **kwargs):
        """
        List all the published articles
        """
        queryset = self.get_queryset()

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_popular_articles(self, request, *args, **kwargs):
        """
        List the popular articles sorted based upon number of claps
        """
        queryset = self.get_queryset().order_by('-no_of_claps')

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_recent_published_articles(self, request, *args, **kwargs):
        """
        List the recent published articles
        """
        queryset = self.get_queryset().order_by('-created_on')

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_related_articles(self, request, *args, **kwargs):
        """
        List the articles related to the given article with the article_id. Related means the articles which have the same writer or the same category or both
        """
        instance = Article.objects.get(id=kwargs["article_id"])
        queryset = self.get_queryset().filter(Q(created_by=instance.created_by) | Q(categories__in=instance.categories.all()))

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        """
        Retrieve article details
        """
        instance = Article.objects.get(id=kwargs["article_id"])
        serializer = self.serializer_class(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_category_articles(self, request, *args, **kwargs):
        """
        List all the category articles
        """

        queryset = self.get_queryset().filter(categories__id=kwargs['cat_id'])

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_popular_category_articles(self, request, *args, **kwargs):
        """
        List all the category articles sorted based upon number of claps
        """

        queryset = self.get_queryset().filter(categories__id=kwargs['cat_id']).order_by('-no_of_claps')

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_published_writer_articles(self, request, *args, **kwargs):
        """
        List all the published articles by the writers
        """

        queryset = self.get_queryset().filter(created_by__id=kwargs["writer_id"])
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def clap_on_article(self, request, *args, **kwargs):

        instance = Article.objects.get(id=kwargs["article_id"])

        instance.no_of_claps += 1
        instance.save()
        return Response(status=status.HTTP_200_OK)

    def retrieve_top_article(self, request, *args, **kwargs):

        instance = Article.objects.first()
        serializer = self.serializer_class(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CategoryViewset(viewsets.ViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()

    def create(self, request, *args, **kwargs):
        """
        Add category
        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list_all_categories(self, request, *args, **kwargs):
        """
        List all the categories
        """

        queryset = self.get_queryset()

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list_article_categories(self, request, *args, **kwargs):
        """
        List all the categories of the article
        """

        instance = Article.objects.get(id=kwargs["article_id"])

        categories = instance.categories
        serializer = self.serializer_class(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CommentViewset(viewsets.ViewSet):
    serializer_class = CommentSerializer

    def get_queryset(self):
        comment_article = Article.objects.get(id=self.kwargs["article_id"])
        return Comment.objects.filter(commented_article=comment_article)

    def create(self, request, *args, **kwargs):
        """
        Add comment
        """
        serializer = self.serializer_class(request.data)
        serializer.is_Valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list_article_comments(self, request, *args, **kwargs):
        """
        List all the articles comments
        """

        queryset = self.get_queryset()

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def clap_on_comment(self, request, *args, **kwargs):
        """
        Clap on the comment
        """

        instance = Comment.objects.get(id=kwargs["comment_id"])

        instance.no_of_claps += 1
        instance.save()

        return Response(status=status.HTTP_200_OK)

