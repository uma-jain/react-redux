import React from "react";
import "./styles.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const posts = this.props.posts;
    const postslist = posts.map(post => {
      return (
        <div className="post">
          <h4 className="center">{post.title}</h4>
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div className="container-home">
        <h4 className="center"> Home</h4>
        {postslist}
      </div>
    );
  }
}
function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps)(App);
