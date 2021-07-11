import React from 'react';
import style from './Post.module.css';
import { NavLink } from 'react-router-dom';

class Posts extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Post 1"},
      { id: 2, title: "Post 2"},
      { id: 3, title: "Post 3"}
    ]
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map(post => (
            <li className={style.lista} key={post.id}>
              <NavLink className={style.navlink} to={`/posts/${post.id}/`}>{post.title}</NavLink>
            </li>	
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;