import React, { Component } from 'react';
import axios from 'axios';

create_article = function (e,article_data)  {
  e.preventDefault();
  axios.post("http://localhost:8000/api/articles/",article_data)
  .then(function (response) {
    return (response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}

get_all_published_articles = function (e) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/")
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

get_all_writer_published_articles = function (e, writer_name) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/writers/" + str(writer_id) + "/")
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

get_all_writer_unpublished_articles = function (e, writer_name) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/writers/" + str(writer_id) + "/unpublished/")
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
}

patch_article_content = function (e, article_id) => {
  e.preventDefault();
  axios.patch("http://localhost:8000/api/articles/" + str(article_id) + "/")
    .then(function (response) {
      return (response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

get_article_content = function (e, article_title) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/" + article_title + "/")
    .then(function (response) {
        return (response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

get_category_articles = function (e, category_name) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/category/" + category_name + "/")
    .then(function (response) {
      return (response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

get_popular_articles = function (e) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/popular/")
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
}

add_comments_to_article = function (e, article_id, comment_data) => {
  e.preventDefault();
  axios.post("http://localhost:8000/api/articles/" + str(article_id) + "/comment/", comment_data)
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
}

get_article_comments = function (e, article_id) => {
  e.preventDefault();
  axios.get("http://localhost:8000/api/articles/" + str(article_id) + "/comments/")
    .then(function (response) {
        return (response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

add_writer_to_writers = function (e, writer_data) {
  e.preventDefault();
  axios.post("http://localhost:8000/api/writers/", writer_data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

patch_writer_details = function (e, writer_id, writer_data) {
  e.preventDefault();
  axios.patch("http://localhost:8000/api/writers/" + str(writer_id) + "/", writer_data)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

get_writer_details = function (e, writer_id) {
  e.preventDefault();
  axios.get("http://localhost:8000/api/writers/" + str(writer_id) + "/")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default {create_article, get_all_published_articles};
