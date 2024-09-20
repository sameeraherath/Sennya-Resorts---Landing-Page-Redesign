import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import MapComponent from "./components/MapComponent";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Gallery />
      <Blog />
      <ContactPage />
      <Footer />
    </>
  );
};

export default App;
