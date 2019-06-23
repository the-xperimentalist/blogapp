import React, { Component } from 'react';

class CategoryHeader extends Component {
  state = {};
  render () {
    let img1 = {
      backgroundImage: require('../../../static/img/demo/1.jpg'),
      height: '350px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="card border-0 mb-5 box-shadow">
            <div style={img1}>
            </div>
            <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h2 font-weight-bold">
                <a className="text-dark" href="./article.html">Brain Stimulation Relieves Depression Symptoms</a>
                </h2>
                <p className="card-text">
                     Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
                </p>
                <div>
                    <small className="d-block"><a className="text-muted" href="./author.html">Favid Rick</a></small>
                    <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
            </div>
        </div>
        )
  }
}

export default CategoryHeader;
