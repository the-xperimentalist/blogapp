import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  state = {};
  render () {
    return (

        <div className="container mt-5">
          <footer className="bg-white border-top p-3 text-muted small">
            <div className="row align-items-center justify-content-between">
              <div>
                <span className="navbar-brand mr-2"><strong>Mundana</strong></span> Copyright &copy;
                <script>document.write(new Date().getFullYear())</script>
                 . All rights reserved.
              </div>
              <div>
                Made with <Link target="_blank" className="text-secondary font-weight-bold" to="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Mundana Theme</Link> by WowThemes.net.
              </div>
            </div>
          </footer>
        </div>

        )
  }
}

export default Footer;
