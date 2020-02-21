import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  postList() {
    return this.props.posts.map(post => {
      return (
        <div className="card" key={post.id}>
          <div className="card-content white">
            <span className="card-title teal-text">{post.title}</span>
            <p>{post.body}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.postList().splice(0, 10)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
