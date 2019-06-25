import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView2 extends Component {
  state = {
    related_img: null
  };
  format_img_link () {
    let new_link = this.props.article.related_img.replace('react_frontend/src/', '../../');
    return new_link;
  }
  componentDidMount () {
    this.setState({related_img: this.props.article.related_img.replace('react_frontend/src/', '../../')})
  }
  render () {
    const { article } = this.props;
     let v = require("../../static/img/article_imgs/default.jpg");
    //let v = require(`${this.state.article.related_img.replace('react_frontend/src/', '../../')}`)
    return (
        <div className="mb-3 d-flex justify-content-between">
          <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
              <Link className="text-dark" to={`/${article.id}`}>{article.title}</Link>
              </h2>
              <p>
                  {article.subtitle}
              </p>
              <Link to={`/writers/${article.created_by}`}><div className="card-text text-muted small">
                   {article.writer_name}
              </div></Link>
              <small className="text-muted">{article.created_on}</small>
          </div>
          <img height="120" src={v} alt="Img for ArticleView2" />
      </div>
        )
  }
}

export default ArticleView2;
