import React, { Component } from 'react';
import SubHeader from '../common/subHeader'
import ArticleView1 from '../common/articleView1';
import {axiosUnauthInstance} from '../../utils/axiosInstance';
import SubscribeBox from '../common/subscribeBox';

class ArticleBody extends Component {
  state = {
    article: {},
    related_articles_fetching: true,
    related_articles: [],
    fetching: true
  };
  get_related_articles () {
    axiosUnauthInstance.get(`articles/${this.props.match.params.article_id}/related/`)
      .then(response => {
        this.setState({
          related_articles: response.data,
          related_articles_fetching: false
        })
      })
      .catch(err => {
        console.log("Got error")
      })
  };
  get_article () {
    axiosUnauthInstance.get(`view/${this.props.match.params.article_id}/`)
      .then(response => {
        this.setState({
          article: response.data,
          fetching: false
        })
      })
      .catch(err => {
        console.log("Got error")
      })
  }
  componentDidMount () {
    console.log(this.props.match.params.article_id)
    this.get_article();
    this.get_related_articles();
  }
  render () {
    const { article, related_articles } = this.state;
    let img1 = require('../../static/img/demo/avatar2.jpg');
    let img2 = require('../../static/img/demo/intro.jpg');
    return (
      <React.Fragment>
        <div className="container">
          <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
            <div className="h-100 tofront">
              <div className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                  <p className="text-uppercase font-weight-bold">
                    <a className="text-danger" href="./category.html">Stories</a>
                  </p>
                  <h1 className="display-4 secondfont mb-3 font-weight-bold">{article.title}</h1>
                  <p className="mb-3">
                    {article.subtitle}
                  </p>
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src={img1} width="70" alt="article-img" />
                    <small className="ml-2">{article.writer_name} <span className="text-muted d-block">A few hours ago &middot; 5 min. read</span>
                    </small>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <img src={img2} alt="article-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-4">
          <div className="row justify-content-center">
            <div className="col-lg-2 pr-4 mb-4 col-md-12">
              <div className="sticky-top text-center">
                <div className="text-muted">
                  Share this
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <article className="article-post">
                <p>
                  {article.description}
                </p>
              </article>
              <div className="border p-5 bg-lightblue">
                <SubscribeBox />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-4 pb-4">
          <h5 className="font-weight-bold spanborder"><span>Read next</span></h5>
          <div className="row">
            <SubHeader />
            <div className="col-lg-6">
              <div className="flex-md-row mb-4 box-shadow h-xl-300">
                {related_articles.slice(0,3).map((article, key) =>
                    <ArticleView1 key={article.id} article={article} />
                  )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
        )
  }
}

export default ArticleBody;
