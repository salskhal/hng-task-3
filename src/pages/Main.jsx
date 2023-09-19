import React from "react";
import Hero from "../components/Main/Hero";
import Navbar from "../components/Navbar";
import GalleryContainer from "../components/Main/GalleryContainer";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GalleryContainer />
      <Footer />
    </div>
  );
}
