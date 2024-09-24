import { useState } from "react";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Store from "./components/Store";
import Testimonials from "./components/Testimonials";
import CTA2 from "./components/CTA2";

function App() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Features />
        <CTA />
        {/* <Store /> */}
        <Testimonials />
        <CTA2 />
      </MainLayout>
    </>
  );
}

export default App;
