import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleView1 extends Component {
  state = {};
  render () {
    var blogImg3 = require('../../static/img/demo/blog6.jpg');
    return (
        <div className="mb-3 d-flex align-items-center">
          <img height="80" alt="blogimg3" src={blogImg3} />
          <div className="pl-3">
              <h2 className="mb-2 h6 font-weight-bold">
                  <Link className="text-dark" to={`/sun-skimming-probe-calling-home`}>Sun-skimming probe starts calling home</Link>
              </h2>
              <div className="card-text text-muted small">
                   Jake Bittle in LOVE/HATE
              </div>
              <small className="text-muted">Dec 12 &middot; 5 min read</small>
          </div>
        </div>
        )
  }
}

export default ArticleView1;
