import React from "react";
import Header from "./components/header";
import HeroSection from "./components/hero";

function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <HeroSection />
      <h1 className="text-3xl font-extrabold text-center uppercase">
        OverView{" "}
      </h1>
      {/* <img src="/hero.png" alt="salam" /> */}
    </div>
  );
}

export default Home;
