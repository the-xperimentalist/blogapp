from django.urls import path
from articles.views import *

# List and create all articles for home page
CreateArticle = AuthArticleViewset.as_view({
    'post': 'create'
    })

ListArticles = ArticleViewset.as_view({
    'get': 'list_all_published_articles'
    })

RetrieveTopArticle = ArticleViewset.as_view({
    'get': 'retrieve_top_article'
    })

# List all popular articles for home page
ListPopularArticles = ArticleViewset.as_view({
    'get': 'list_popular_articles'
    })

# List all the recent published articles
ListRecentPublishedArticles = ArticleViewset.as_view({
    'get': 'list_recent_published_articles'
    })

# List all articles that are related to a specific article
ListRelatedArticles = ArticleViewset.as_view({
    'get': 'list_related_articles'
    })

# Retrieve, Update and Destroy article details
UpdateDestroyArticle = AuthArticleViewset.as_view({
    'patch': 'edit_article',
    'delete': 'destroy'
    })

RetrieveArticle = ArticleViewset.as_view({
    'get': 'retrieve'
})

# List all category articles
ListCategoryArticles = ArticleViewset.as_view({
    'get': 'list_category_articles'
    })

# List all popular category articles
ListPopularCategoryArticles = ArticleViewset.as_view({
    'get': 'list_popular_category_articles'
    })

# List published writer articles
ListPublishedWriterArticles = ArticleViewset.as_view({
    'get': 'list_published_writer_articles'
    })

# List unpublished writer articles
ListUnpublishedWriterArticles = AuthArticleViewset.as_view({
    'get': 'list_unpublished_writer_articles'
    })

# Clap on article
ClapOnArticle = ArticleViewset.as_view({
    'post': 'clap_on_article'
    })

# Add new category
AddCategory = CategoryViewset.as_view({
    'post': 'create'
    })

# List top 10 categories
ListCategories = CategoryViewset.as_view({
    'get': 'list_all_categories'
    })

# List article categories
ListArticleCategories = CategoryViewset.as_view({
    'get': 'list_article_categories'
    })

# List and create all article comments
ListCreateArticleComments = CommentViewset.as_view({
    'get': 'list_article_comments',
    'post': 'create'
    })

# Clap on comment
ClapOnComment = CommentViewset.as_view({
    'post': 'clap_on_comment'
    })

urlpatterns = [
    path('articles/', ListArticles, name='list-create-article'),
    path('articles/create/', CreateArticle, name='create-article'),
    path('articles/top/', RetrieveTopArticle, name='retrieve-top-article'),
    path('articles/popular/', ListPopularArticles, name='popular-articles-list'),
    path('articles/recent/', ListRecentPublishedArticles, name='recent-published-articles-list'),
    path('<int:article_id>/related/', ListRelatedArticles, name='related-articles-list'),
    path('<int:article_id>/', UpdateDestroyArticle, name='retrieve-update-destroy-article'),
    path('view/<int:article_id>/', RetrieveArticle, name='retrieve-article'),
    path('categories/<int:cat_id>/', ListCategoryArticles, name='list-category-articles'),
    path('categories/popular/<int:cat_id>/', ListPopularCategoryArticles, name='list-popular-category-articles'),
    path('writers/<int:writer_id>/', ListPublishedWriterArticles, name='list-published-writer-articles'),
    path('writers/<int:writer_id>/unpublished/', ListUnpublishedWriterArticles, name='list-unpublished-writer-articles'),
    path('<int:article_id>/clap/', ClapOnArticle, name='clap-on-article'),
    path('categories/', ListCategories, name='list-categories'),
    path('<int:article_id>/categories/', ListArticleCategories, name='list-article-categories'),
    path('<int:article_id>/comments/', ListCreateArticleComments, name='list-create-article-comments'),
    path('<int:comment_id>/clap/', ClapOnComment, name='clap-on-comment')
]
