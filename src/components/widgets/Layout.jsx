import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[90vh]">{children}</main>
      <footer className="relative top-10">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
