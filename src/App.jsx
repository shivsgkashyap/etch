import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div class="wrapper">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
