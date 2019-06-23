import React, { Component } from 'react';

class SubscribeBox extends Component {
  state = {};
  render () {
    return (
        <div className="row justify-content-between">
            <div className="col-md-6">
                <h5 className="font-weight-bold secondfont">Become a member</h5>
                 Get the latest news right in your inbox. It's free and you can unsubscribe at any time. We hate spam as much as we do, so we never spam!
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="col-md-12 mt-3">
                        <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        )
  }
}

export default SubscribeBox;
