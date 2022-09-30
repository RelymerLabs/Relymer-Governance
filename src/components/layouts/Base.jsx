/** @format */

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Base(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Base;
