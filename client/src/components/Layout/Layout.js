import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css'; // Import your CSS file for layout styling

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
