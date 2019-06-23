import React, { Component } from 'react';

class WriterHeader extends Component {
  state = {};
  render () {
    let writerImg = require('../../../static/img/demo/avatar2.jpg');
    return (
        <div className="mb-3 d-flex justify-content-between">
            <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold">Demo User</h2>
                <p>
                     This is demo user description
                </p>
                Member since <small className="text-muted">Dec 12</small>
            </div>
            <img height="120" src={writerImg} alt="writerImg" />
        </div>
        )
  }
}

export default WriterHeader;
