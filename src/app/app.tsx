import React from "react";
import "./theme/app.scss";
import { Routes, Route } from "react-router-dom";
import { CarDetails } from "./modules/cars/car-details/car-details.component";
import { Cars } from "./modules/cars/cars.component";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="carDetails" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
