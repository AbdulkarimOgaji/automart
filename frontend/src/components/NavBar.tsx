import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/user/userSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
    alert('logout successful')
    navigate('/')
  };
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <header className="navBar">
        <img src="/images/logo.png" className="logo" alt="logo" />
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
            {isLoggedIn && (
              <li>
                <button className="border-0" onClick={handleLogout}>
                  <a href="/">Logout</a>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {/* <div className="navbar-height"></div> */}
    </>
  );
};

export default NavBar;
