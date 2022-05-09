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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    {/* <div className="navbar-height"></div> */}
      </>
    
  );
};

export default NavBar;
