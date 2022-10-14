import React from "react";
import "./App.css";
import logo from "./img/logo.png";
import { Garagem } from './components/Garagem'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Aula - Componentes React</h1>
      <Header />
      <Garagem />
      <Footer />
    </div>
  );
}
