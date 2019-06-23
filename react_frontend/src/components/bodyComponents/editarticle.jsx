import React, { Component } from 'react';
import ArticleForm from './subcomponents/articleForm';

class EditArticle extends Component {
  state = {};
  render () {
    return (
        <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <ArticleForm />
                </div>
            </div>
        </div>
        )
  }
}

export default EditArticle;
