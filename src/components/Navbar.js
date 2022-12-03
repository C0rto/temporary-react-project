import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import SearchForm from './SearchForm';

const Navbar = () => {
  const { dice } = useGlobalContext();
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <SearchForm />
          <ul className="nav-links">
            <li>
              <Link to={'/about'}>info</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Router 6 use outlet */}
      <Outlet />
    </>
  );
};

export default Navbar;
