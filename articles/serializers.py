from rest_framework import serializers
from articles.models import Article, Comment, Category

class ArticleSerializer(serializers.ModelSerializer):

    writer_name = serializers.CharField(source='created_by.name', required=True)

    class Meta:
        model = Article
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'
