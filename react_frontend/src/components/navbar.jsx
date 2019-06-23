import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  handle_signout = (e) => {
    window.localStorage.token = null;
    window.location.reload();
  }
  navBarProfile () {
    if(window.localStorage.token == null) {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item highlight">
            <Link to="/signin"><a className="nav-link" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Sign In</a></Link>
          </li>
        </ul>
            )
    }
    else {
      return (
        <ul className="navbar-nav ml-auto d-flex align-items-center">
          <li className="nav-item highlight">
            <div className="dropdown">
              <a className="nav-link dropdown-toggle" type="button" data-toggle="dropdown">Mayank Prasoon</a>
              <ul className="dropdown-menu">
                <li className="nav-item"><Link to="/writers/writer_name">Profile</Link></li>
                <li className="nav-item"><Link to="/edit/writer_name">Settings</Link></li>
                <li className="nav-item">Sign Out</li>
              </ul>
            </div>
          </li>
        </ul>
        )
    }
  }
  render () {
    let category_names = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6", "Category 7"]
    return (

        <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <div className="container">
                <a className="navbar-brand" href="./index.html"><strong>Mundana</strong></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="javascript:void(0)" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto d-flex align-items-center">
                        <li className="nav-item">
                        <Link className="nav-link" to='/'>Intro <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[0]}`}>Category 1</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[1]}`}>Category 2</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[2]}`}>Politics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[3]}`}>Health</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[4]}`}>Collections</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={`/categories/${category_names[5]}`}>About</Link>
                        </li>
                        {/*<li className="nav-item">
                        <Link to={`/categories/${category_names[6]}`}><a className="nav-link" href="./docs.html">Template <span className="badge badge-secondary">docs</span></a></Link>
                        </li>*/}
                    </ul>

                    {this.navBarProfile()}
                </div>
            </div>
        </nav>
        )
  }
}

export default Navbar;
