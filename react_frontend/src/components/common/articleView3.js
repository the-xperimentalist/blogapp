import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView3 extends Component {
  state = {
    article: this.props.article
  };
  render () {
    const { article } = this.props;
    return (
        <li>
          <span>
          <h6 className="font-weight-bold">
          <Link className="text-dark" to={`/${article.id}`}>{this.state.article.title}</Link>
          </h6>
          <p className="text-muted">
              <Link to={`/writers/${article.created_by}`}>{article.writer_name}</Link> in SCIENCE
          </p>
          </span>
          </li>
        )
  }
}

export default ArticleView3;
