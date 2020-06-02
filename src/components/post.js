import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actioncreator";

class Post extends Component {
  handleClick = () => {
    this.props.deletepost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center pink">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: posts.find(post => post.id === id)
  };
};

export default connect(
  mapStateToProps,
  actions
)(Post);
