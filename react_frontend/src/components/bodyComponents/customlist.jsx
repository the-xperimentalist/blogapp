import React, { Component } from 'react';
import CategoryHeader from './subcomponents/categoryHeader';
import ArticleView2 from '../common/articleView2';
import ArticleView3 from '../common/articleView3';
import SubscribeBox from '../common/subscribeBox';

class CustomList extends Component {
  state = {
  };
  get_category_articles = (category) => {
    let articles_list = [];
    /*testData["articles"].forEach(function (article) {
      article["categories"].forEach(function (category_id) {
        if (category_id == category["id"]) {
          articles_list.push(article);
        }
      })
    })
    */
    return articles_list;
  }
  get_category = (category_name) => {
    /* testData["categories"].forEach(function (category) {
      if (category["name"] == category_name) {
        return category;
      }
    })
    */
  }
  render () {
    return (
      <React.Fragment>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8">
                    <h5 className="font-weight-bold spanborder"><span>Featured in Science</span></h5>
                    <CategoryHeader />
                    <h5 className="font-weight-bold spanborder"><span>Latest</span></h5>
                    <ArticleView2 />
                    <ArticleView2 />
                    <ArticleView2 />
                </div>
                <div className="col-md-4 pl-4">
                    <div className="sticky-top">
                        <h5 className="font-weight-bold spanborder"><span>Popular in Science</span></h5>
                        <ol className="list-featured">
                            <ArticleView3 />
                            <ArticleView3 />
                            <ArticleView3 />
                            <ArticleView3 />
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <div className="container pt-4 pb-4">
            <div className="border p-5 bg-lightblue">
                <SubscribeBox />
            </div>
        </div>
      </React.Fragment>
        );
  }
}

export default CustomList;
