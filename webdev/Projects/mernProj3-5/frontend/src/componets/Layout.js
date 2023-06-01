import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
