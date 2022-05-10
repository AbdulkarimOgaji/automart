import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
      <>
      <header className="navBar">
      <img src="/images/logo.png" className="logo" alt="logo"/>
      <input
        type="checkbox"
        name="nav-toggler"
        className="nav-toggler"
        id="nav-toggler"
      />
      <label htmlFor="nav-toggler" className="nav-toggler-label">
        <span></span>
      </label>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    {/* <div className="navbar-height"></div> */}
      </>
    
  );
};

export default NavBar;
