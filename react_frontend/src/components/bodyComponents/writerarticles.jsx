import React, { Component } from 'react';
import WriterHeader from './subcomponents/writerHeader';
import ArticleView2 from '../common/articleView2';
import SubscribeBox from '../common/subscribeBox';
import { testData } from '../../testData';

class WriterArticles extends Component {
  state = {
    articles: [],
    writer_name: this.props.match.params.writer_name
  };
  componentDidMount () {
    testData.testData.forEach(function (writer) {
      if (writer.name === this.state.writer_name) {
        this.setState({writer: writer});
      }
    });
    testData.testData.articles.forEach(function (article) {
      if(article.created_by === this.state.writer.id) {
        this.state.articles.push(article);
      }
    })
  }
  render () {
    return (
        <React.Fragment>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-8">
                        <WriterHeader />
                        <h5 className="spanborder"><span className="font-weight-bold">Published</span>   <span>Unpublished</span></h5>
                        {this.state.articles.map((article, key) =>
                          <ArticleView2 key={article.id} article={article} writer_name={this.get_writer_name(article.created_by)} />
                        )}
                        {/*<ArticleView2 />
                        <ArticleView2 />
                        <ArticleView2 />*/}
                    </div>
                </div>
            </div>

            <div className="container pt-4 pb-4">
                <div className="border p-5 bg-lightblue">
                    <SubscribeBox />
                </div>
            </div>
        </React.Fragment>
        )
  }
}

export default WriterArticles;
