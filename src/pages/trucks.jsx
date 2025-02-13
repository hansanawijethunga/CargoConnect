import React, { useState, createContext, useContext } from "react";
import VehicleTable from "../Components/Truck/table";
import TruckForm from "../Components/Truck/truckform";
import "../styles/truck.css";
import ControllButton from "../Components/controllButtons";

const Truck = () => {
  // Store vehicles in state
  const [vehicles, setVehicles] = useState([
    {
      registrationNumber: "WP AB-1234",
      capacity: 10,
      model: "TATA 1618",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "CP QX-5678",
      capacity: 12,
      model: "Ashok Leyland 2518",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "NP KA-9012",
      capacity: 8,
      model: "Isuzu FVR",
      fuelType: "Diesel",
      condition: "Out of order",
    },
    {
      registrationNumber: "SP BC-3456",
      capacity: 15,
      model: "Mitsubishi Fuso Super Great",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "WP ZX-7890",
      capacity: 5,
      model: "Hino Ranger",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "EP GH-2345",
      capacity: 18,
      model: "Scania P410",
      fuelType: "Diesel",
      condition: "Needs maintenance",
    },
    {
      registrationNumber: "NC LM-6789",
      capacity: 20,
      model: "Mercedes-Benz Actros",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "WP OP-4321",
      capacity: 9,
      model: "FAW J6P",
      fuelType: "Diesel",
      condition: "Out of order",
    },
    {
      registrationNumber: "UP TR-8765",
      capacity: 14,
      model: "Volvo FMX",
      fuelType: "Diesel",
      condition: "Good",
    },
    {
      registrationNumber: "NW UV-3456",
      capacity: 7,
      model: "Dongfeng KR",
      fuelType: "Petrol",
      condition: "Needs maintenance",
    },
  ]);

  const [vehicle, setVehicle] = useState({
    registrationNumber: "",
    capacity: "",
    model: "",
    fuelType: "",
    condition: "",
  });

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setVehicle(vehicles[index]);
    setSelectedIndex(index);
  };

  const handleSave = () => {
    setVehicles([...vehicles, vehicle]);
    handleClear();
  };

  const handleUpdate = () => {
    if (selectedIndex !== null) {
      const updatedData = [...vehicles];
      updatedData[selectedIndex] = vehicle;
      setVehicles(updatedData);
      handleClear();
    }
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      setVehicles(vehicles.filter((_, index) => index !== selectedIndex));
      handleClear();
    }
  };

  const handleClear = () => {
    setVehicle({
      registrationNumber: "",
      capacity: "",
      model: "",
      fuelType: "",
      condition: "",
    });
    setSelectedIndex(null);
  };

  return (
    <div className="page-container">
      <div className="formArea">
        <TruckForm vehicle={vehicle} setVehicle={setVehicle} />
        <div>
          <ControllButton
            onSave={handleSave}
            onClear={handleClear}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            selectedIndex={selectedIndex}
          />
        </div>
      </div>
      <div className="tableArea">
        <h2>Vehicle List</h2>
        <VehicleTable vehicles={vehicles} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Truck;
