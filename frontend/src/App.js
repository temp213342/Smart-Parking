import React, { useState } from "react";
import "./App.css";
import ParkingSystem from "./components/ParkingSystem";
import { mockParkingData } from "./mock";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [parkingData, setParkingData] = useState(mockParkingData);

  return (
    <div className="App">
      <ParkingSystem parkingData={parkingData} setParkingData={setParkingData} />
    </div>
  );
}

export default App;