import React, { Component } from 'react';

class ArticleForm extends Component {
  state = {};
  render () {
    return (
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="Enter title" />
            <small id="emailHelp" className="form-text text-muted">Enter title of your article</small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">SubTitle</label>
            <input type="text" className="form-control" id="inputTitle" aria-describedby="emailHelp" placeholder="Enter title" />
            <small id="emailHelp" className="form-text text-muted">Enter subtitle of your article</small>
          </div>
          <div className="form-group">
            <label for="exampleTextarea">Article Body</label>
            <textarea className="form-control" id="articleBody" rows="5"></textarea>
          </div>
          <div className="form-group">
            <label for="exampleInputFile">Image</label>
            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
  }
}

export default ArticleForm;