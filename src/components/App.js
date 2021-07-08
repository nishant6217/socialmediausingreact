import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('props', this.props);
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img src="" alt="logo" />
          </div>
          <div className="search-container">
            <img className="search-icon" src="" alt="s" />
            <input placeholder="search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://img-premium.flaticon.com/png/512/706/premium/706807.png?token=exp=1625737307~hmac=24a26636561f82a090af99636180a44c"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://img-premium.flaticon.com/png/512/706/premium/706807.png?token=exp=1625737307~hmac=24a26636561f82a090af99636180a44c"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://img-premium.flaticon.com/png/512/706/premium/706807.png?token=exp=1625737307~hmac=24a26636561f82a090af99636180a44c"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log In</li>
                <li>Log Out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
