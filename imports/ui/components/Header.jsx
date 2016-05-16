import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header className="qc-header">
    <Link to="/signin" className="btn-primary">Join Now</Link>
  </header>
);

export default Header;
