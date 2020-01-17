import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	NavLink
} from 'react-router-dom';
import React from 'react';
import About from './About';
import Home from './Home';
import style from './Nav.module.css';

function Nav() {
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
    	  </ul>
    	</div>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about" exact component={About} />
		</Switch>
      </div>
    </Router>
  );
}

export default Nav;