const WarehouseForm = ({ warehouse, setWarehouse }) => {
  const handleChange = (e) => {
    setWarehouse({ ...warehouse, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-container">
      {/* <h2>{selectedVehicle ? "Update Vehicle" : "Add Vehicle"}</h2> */}
      <form className="vehicle-form">
        <div className="form-group">
          <label>Warehouse Name:</label>
          <input
            type="text"
            name="name"
            value={warehouse.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={warehouse.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Warehouse Type:</label>
          <select
            name="type"
            value={warehouse.type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Distribution Center">Distribution Center</option>
            <option value="Cold Storage Warehouse">
              Cold Storage Warehouse
            </option>
            <option value="Bonded Warehouse">Bonded Warehouse</option>
            <option value="Automated Warehouse">Automated Warehouse</option>
            <option value="Raw Materials Warehouse">
              Raw Materials Warehouse
            </option>
            <option value="Finished Goods Warehouse">
              Finished Goods Warehouse
            </option>
            <option value="Fulfillment Center">Fulfillment Center</option>
            <option value="Cross-Docking Warehouse">
              Cross-Docking Warehouse
            </option>
            <option value="Hazardous Materials Warehouse">
              Hazardous Materials Warehouse
            </option>
            <option value="On-Demand Warehouse">On-Demand Warehouse</option>
            <option value="General Warehouse">General Warehouse</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default WarehouseForm;
