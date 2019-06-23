import React, { Component } from 'react';
import './static/css/main.css';
import Navbar from './components/navbar';
import MainBody from './components/bodyComponents/mainBody';
import ArticleBody from './components/bodyComponents/article';
import Footer from './components/footer';
import CustomList from './components/bodyComponents/customlist';
import WriterArticles from './components/bodyComponents/writerarticles';
import EditArticle from './components/bodyComponents/editarticle';
import EditProfile from './components/bodyComponents/editProfile';
import SignUp from './components/bodyComponents/signUp';
import SignIn from './components/bodyComponents/signIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  state = {};
  render () {
    return (
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact name="homepage" path="/" component={MainBody} />
              <Route exact name="signup" path="/signup" component={SignUp} />
              <Route exact name="signin" path="/signin" component={SignIn} />
              <Route exact name="view-article" path="/:article_id" component={ArticleBody} />
              <Route exact name="category-article-list" path="/categories/:category_id" component={CustomList} />
              <Route exact name="writer-article-list" path="/writers/:writer_id" component={WriterArticles} />
              <Route exact name="edit-article" path="/edit/:article_id" component={EditArticle} />
              <Route exact name="edit-writer" path="/edit/:writer_id" component={EditProfile} />
            </Switch>
            <Footer />
          </BrowserRouter>
      )
  }
}

export default App;
