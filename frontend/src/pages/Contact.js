import React from "react";
import Layout from "../components/Layout/Layout.js";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 m-5">
          <img
            src="https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 m-5">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            If you have any query feel free to call
          </p>
          <p className="mt-3">Mail : www.help@ecomshop.com</p>
          <p className="mt-3">Phone: 654564213</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
