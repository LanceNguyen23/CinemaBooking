import Navigationbar from "../Navigationbar";
import Cast from "../../components/Cast";
import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const CastPage = () => {
  return (
    <div>
      <Header></Header>
      <Navigationbar></Navigationbar>
      <Cast></Cast>
      <Footer></Footer>
    </div>
  );
};

export default CastPage;
