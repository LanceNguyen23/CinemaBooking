import Navigationbar from "../Navigationbar";
import MovieType from "../../components/MovieType";
import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const MovieTypePage = () => {
  return (
    <div>
      <Header></Header>
      <Navigationbar></Navigationbar>
      <MovieType></MovieType>
      <Footer></Footer>
    </div>
  );
};

export default MovieTypePage;
