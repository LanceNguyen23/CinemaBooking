import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Navigationbar from "../Navigationbar";
import DetailFilm from "../../components/DetailFilm";
import React from "react";

const DetailFilmPage = () => {
  return (
    <div>
      <Header></Header>
      <Navigationbar></Navigationbar>
      <DetailFilm></DetailFilm>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DetailFilmPage;
