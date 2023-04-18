import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Layout = ({ children, title }) => {
  return (
    <div className="w-100 h-100">
    
      <Helmet>
        
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
    
    </div>
  );
};

Layout.defaultProps = {
  title: "House Markteplace - search best home near you  ",
};

export default Layout;
