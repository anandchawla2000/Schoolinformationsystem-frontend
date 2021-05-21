import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { All, Header, Benfits, Footer,Testimonial } from "./homeparts";
const Home = () => {
  return (
    <>
      <Header />
      <All />
      <Benfits />
      <Testimonial/>
      <Footer />
    </>
  );
};

export default Home;
