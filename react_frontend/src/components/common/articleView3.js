import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView3 extends Component {
  state = {
    article: this.props.article
  };
  render () {
    return (
        <li>
          <span>
          <h6 className="font-weight-bold">
          <Link className="text-dark" to={`/did-supernova-kill-off-large-ocean-animals`}>{this.state.article.title}</Link>
          </h6>
          <p className="text-muted">
              {this.state.article.writer_name} in SCIENCE
          </p>
          </span>
          </li>
        )
  }
}

export default ArticleView3;
