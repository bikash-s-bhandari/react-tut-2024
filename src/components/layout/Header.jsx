
import { NavLink } from "react-router-dom";

const Header = (props) => {

    // const {title,content}=props;
 
  return (
    <nav>
      <ul>
        <li><NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : '')} >About</NavLink></li>
        <li><NavLink to="/posts"  className={({ isActive }) => (isActive ? 'active' : '')} >Posts</NavLink></li>
        <li><NavLink to="/docs"  className={({ isActive }) => (isActive ? 'active' : '')} >Documentation</NavLink></li>

      </ul>
     
   
  </nav>
  );
};

export default Header;
