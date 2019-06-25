import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubHeader extends Component {
  state = {};
  render () {
    var leftImg = {
      backgroundSize: 'cover',
      height: '150px',
      backgroundImage: 'url(' + require('../../static/img/demo/1.jpg') + ')',
      backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="col-lg-6">
          <div className="card border-0 mb-4 box-shadow h-xl-300">
            <div style={leftImg}></div>
              <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h4 font-weight-bold">
                  <a className="text-dark" href="./article.html">Brain Stimulation Relieves Depression Symptoms</a>
                </h2>
                <p className="card-text">
                   Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression.
                </p>
              <div>
                <small className="d-block"><Link className="text-muted" to={`/writers/${1}`}>Favid Rick</Link></small>
                <small className="text-muted">Dec 12 &middot; 5 min read</small>
              </div>
            </div>
          </div>
        </div>
        )
  }
}

export default SubHeader;
