import styles from "./Dashboard.module.scss";
import Navigationbar from "../Navigationbar";
import Home from "../Home";
import classNames from "classnames/bind";
import React from "react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const cx = classNames.bind(styles);

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <Navigationbar></Navigationbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
