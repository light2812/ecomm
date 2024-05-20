import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="footer bg-dark text-light">
      <Header />
      <main style={{ minHeight: "75vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
