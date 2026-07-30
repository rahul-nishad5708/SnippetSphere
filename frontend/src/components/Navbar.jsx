import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <CodeIcon />
          PasteSphere
        </Link>

        <ul className="navbar-links">
          {user && (
            <>
              <li><NavLink to="/">EXPLORER</NavLink></li>
              <li><NavLink to="/create">NEW_FILE</NavLink></li>
            </>
          )}
          <li><NavLink to="/public">SEARCH</NavLink></li>
        </ul>

        <div className="navbar-actions">
          {user ? (
            <>
              <span className="navbar-user">
                {user.name}
              </span>
              <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
                exit
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
