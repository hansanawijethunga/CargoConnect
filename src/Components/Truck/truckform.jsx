import React, { useState, useEffect } from "react";
import ControllButton from "../controllButtons";

const TruckForm = ({ vehicle, setVehicle }) => {
  // Update vehicle state if selectedVehicle is provided

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      {/* <h2>{selectedVehicle ? "Update Vehicle" : "Add Vehicle"}</h2> */}
      <form  className="vehicle-form">
        <div className="form-group">
          <label>Registration Number:</label>
          <input
            type="text"
            name="registrationNumber"
            value={vehicle.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={vehicle.capacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={vehicle.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fuel Type:</label>
          <select
            name="fuelType"
            value={vehicle.fuelType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className="form-group">
          <label>Condition:</label>
          <input
            type="text"
            name="condition"
            value={vehicle.condition}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default TruckForm;
