import React, { Component } from 'react';

class SubscribeBox extends Component {
  state = {};
  render () {
    return (
        <div className="row justify-content-between">
          <div className="col-md-5 mb-2 mb-md-0">
            <h5 className="font-weight-bold secondfont">Become a member</h5>
              Get the latest news right in your inbox. We never spam!
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Enter your e-mail address" />
              </div>
              <div className="col-md-12 mt-2">
                <button type="submit" className="btn btn-success btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        )
  }
}

export default SubscribeBox;
