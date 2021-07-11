import { 
  HashRouter as Router, 
  Switch, 
  Route, 
  NavLink,
  Redirect
} from 'react-router-dom';
import React from 'react';
import About from './About';
import Home from './Home';
import NotFound from "./NotFound"
import Posts from './Posts';
import PostDetails from './PostDetails';
import style from './Nav.module.css';

const Nav = () => {
  return (
    <Router>
      <div>
        <div className={style.navigation}>
          <ul className={style.links}>
            <NavLink exact={true} className={style.link} activeClassName={style.active} to="/">
              <li>Home</li>
            </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to="/about">
              <li>About</li>
            </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to="/posts">
              <li>Posts</li>
            </NavLink>
          </ul>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/:id/" component={PostDetails} />
          <Route path="/posts" render={props => <Posts {...props}/>} />
          <Route path="/about" exact component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect path="*" to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default Nav;