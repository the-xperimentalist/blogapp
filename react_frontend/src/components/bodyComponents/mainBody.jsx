import React, { Component } from 'react';
import HomeHeader from './subcomponents/homeHeader';
import SubHeader from '../common/subHeader';
import ArticleView1 from '../common/articleView1';
import ArticleView2 from '../common/articleView2';
import ArticleView3 from '../common/articleView3';
import axios from 'axios';

class MainBody extends Component {
  state = {
    articles: [],
    popular_articles: [],
    popularArticleLoading: true
  };
  componentDidMount () {
    this.get_all_articles();
    this.get_popular_articles();
  };
  get_popular_articles () {
    axios.get("http://localhost:8000/api/articles/popular/")
      .then(response => {
        this.setState({
          popular_articles: response.data,
          popularArticleLoading: false
        });
      })
      .catch(err => {
        console.log("Got error")
      })
  }
  get_all_articles () {
    // let authstr = 'Bearer ' + window.localStorage.token;
    // axios.get("http://localhost:8000/api/articles/", { headers: { Authorization: authstr }})
    axios.get("http://localhost:8000/api/articles/")
      .then(response => {
        this.setState({articles: response.data});
      })
      .catch(err => {
        console.log("Got error")
      })
  }
  render () {
    const { popularArticleLoading, popular_articles } = this.state;
    return (
        <React.Fragment>
            <HomeHeader />

            <div className="container pt-4 pb-4">
                <div className="row">
                    <SubHeader />
                    <div className="col-lg-6">
                      <div className="flex-md-row mb-4 box-shadow h-xl-300">
                          <ArticleView1 />
                          <ArticleView1 />
                          <ArticleView1 />
                      </div>
                  </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-8">
                      <h5 className="font-weight-bold spanborder"><span>All Stories</span></h5>
                      {this.state.articles.map((article, key) =>
                          <ArticleView2 key={article.id} article={article} />
                        )}
                  </div>
                    <div className="col-md-4 pl-4">
                      <h5 className="font-weight-bold spanborder"><span>Popular</span></h5>
                      <ol className="list-featured">
                      {
                        popularArticleLoading ? 'Loading...' : popular_articles.map((article, key) =>
                            <ArticleView3 key={article.id} article={article} />
                          )
                      }

                      </ol>
                  </div>
                </div>
            </div>
        </React.Fragment>
        )
  }
}

export default MainBody;
