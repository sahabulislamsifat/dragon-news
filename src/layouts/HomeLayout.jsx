import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav></nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
