import React, { Component } from 'react';
import axios from 'axios';

class HomeHeader extends Component {
  state = {
    article: null,
    isLoading: true,
    error: null
  };
  get_top_article () {
    axios.get("http://localhost:8000/api/articles/top/")
      .then(response => {
        console.log("Boo")
        this.setState({
            article: response.data,
            isLoading: false
        });
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount () {
    this.get_top_article();
  }
  render () {
    const { isLoading } = this.state;
    var topArticlebgImg = {
      backgroundSize: 'cover',
      backgroundImage: 'url(' + require('../../../static/img/demo/home.jpg') + ')'
    };
    return isLoading ? 'Loading...' : <div className="container">
                <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
                    <div className="pl-4 pr-0 h-100 tofront">
                        <div className="row justify-content-between">
                            <div className="col-md-6 pt-6 pb-6 align-self-center">
                                <h1 className="secondfont mb-3 font-weight-bold">{this.state.article.title}</h1>
                                <p className="mb-3">
                                    {this.state.article.subtitle}
                                </p>
                                <a href="./article.html" className="btn btn-dark">Read More</a>
                            </div>
                            <div className="col-md-6 d-none d-md-block pr-0" style={topArticlebgImg}>   </div>
                        </div>
                    </div>
                </div>
            </div>
  }
}

export default HomeHeader;
