import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView1 extends Component {
  state = {
    related_img: null
  };
  componentDidMount () {
    console.log("Component mounted")
    this.setState({related_img: this.props.article.related_img.replace('react_frontend/src/', '../../')})
  }
  render () {
    const { article } = this.props;
    let v = require("../../static/img/article_imgs/default.jpg")
    //let v = require(`${this.state.article.related_img.replace('react_frontend/src/', '../../')}`)
    return (
        <div className="mb-3 d-flex align-items-center">
          <img height="80" alt="blogimg3" src={v} />
          <div className="pl-3">
              <h2 className="mb-2 h6 font-weight-bold">
                  <Link className="text-dark" to={`/${article.id}`}>{article.title}</Link>
              </h2>
              <div className="card-text text-muted small">
                   <Link to={`/writers/${article.created_by}`}>{article.writer_name}</Link> in LOVE/HATE
              </div>
              <small className="text-muted">{article.created_on} &middot; 5 min read</small>
          </div>
        </div>
        )
  }
}

export default ArticleView1;
