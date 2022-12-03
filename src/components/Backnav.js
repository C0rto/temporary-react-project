import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const Backnav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="section">
          <Link to={'/'} className="btn btn-primary btn-details btn-back">
            <FaChevronLeft /> indietro
          </Link>
        </div>
      </nav>
      {/* Router 6 use outlet */}
      <Outlet />
    </>
  );
};

export default Backnav;
