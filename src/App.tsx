import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import Gallery from "./components/Gallery";


function App() {
  return (
      <div>
        <Header />
        <Gallery />
      </div>
  );
}

export default App;
