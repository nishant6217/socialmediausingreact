import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://img-premium.flaticon.com/png/512/706/premium/706807.png?token=exp=1625737307~hmac=24a26636561f82a090af99636180a44c"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img src="" alt="like-icon" />
                  <span>10 likes</span>
                </div>
                <div className="post-comments-icon">
                  <img src="" alt="comments-icon" />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder=" start typing the comment " />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-like">32</span>
                  </div>
                  <div className="post-content-comment">Random content</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
