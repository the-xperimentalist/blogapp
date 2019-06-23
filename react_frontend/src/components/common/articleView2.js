import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView2 extends Component {
  state = {
    article: this.props.article,
    related_img: null
  };
  convert_name_into_slug_url (name) {
    name.replace(" ","-");
    let slug_url = '/' + name;
    return slug_url;
  }
  format_img_link () {
    console.log("Here")
    let new_link = this.state.article.related_img.replace('react_frontend/src/', '../../');
    console.log(new_link)
    return new_link;
  }
  componentDidMount () {
    this.setState({related_img: this.state.article.related_img.replace('react_frontend/src/', '../../')})
  }
  render () {
     let v = require("../../static/img/article_imgs/default.jpg");
    //let v = require(`${this.state.article.related_img.replace('react_frontend/src/', '../../')}`)
    return (
        <div className="mb-3 d-flex justify-content-between">
          <div className="pr-3">
              <h2 className="mb-1 h4 font-weight-bold">
              <Link className="text-dark" to={this.convert_name_into_slug_url(this.state.article.title)}>{this.state.article.title}</Link>
              </h2>
              <p>
                  {this.state.article.subtitle}
              </p>
              <div className="card-text text-muted small">
                   {this.state.article.writer_name}
              </div>
              <small className="text-muted">{this.state.article.created_on}</small>
          </div>
          <img height="120" src={v} alt="Img for ArticleView2" />
      </div>
        )
  }
}

export default ArticleView2;
