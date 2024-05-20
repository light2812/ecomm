import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout.js";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="pnf-title m-3">404</h1>
        <h2 className="pnf-heading m-3">Oops ! Page Not Found</h2>
        <Link to="/" className="btn btn-primary m-3">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
