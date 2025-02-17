import { useState } from "react";
import ControllButton from "../Components/controllButtons";
import WarehouseForm from "../Components/warehouse/warehouseForm";
import WarehouseTable from "../Components/warehouse/warehouseTable";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([
    {
      name: "Central Distribution Hub",
      location: "Colombo, Sri Lanka",
      type: "Distribution Center",
    },
    {
      name: "Frozen Goods Storage",
      location: "Kandy, Sri Lanka",
      type: "Cold Storage Warehouse",
    },
    {
      name: "Ocean Bonded Storage",
      location: "Galle, Sri Lanka",
      type: "Bonded Warehouse",
    },
    {
      name: "Automated Logistics Hub",
      location: "Negombo, Sri Lanka",
      type: "Automated Warehouse",
    },
    {
      name: "General Storage Facility",
      location: "Jaffna, Sri Lanka",
      type: "General Warehouse",
    },
  ]);

  const [warehouse, setWarehouse] = useState({
    name: "",
    location: "",
    type: "",
  });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = (index) => {
    setWarehouse(warehouses[index]);
    setSelectedIndex(index);
  };

  const handleSave = () => {
    setWarehouses([...warehouses, warehouse]);
    handleClear();
  };

  const handleUpdate = () => {
    if (selectedIndex !== null) {
      const updatedData = [...warehouses];
      updatedData[selectedIndex] = warehouse;
      setWarehouses(updatedData);
      handleClear();
    }
  };

  const handleDelete = () => {
    if (selectedIndex !== null) {
      setWarehouses(warehouses.filter((_, index) => index !== selectedIndex));
      handleClear();
    }
  };

  const handleClear = () => {
    setWarehouse({
        name: "",
        location: "",
        type: "",
    });
    setSelectedIndex(null);
  };

  return (
    <div className="page-container">
      <div className="formArea">
        <WarehouseForm warehouse={warehouse} setWarehouse={setWarehouse} />
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
        <h2>Warehouse List</h2>
        <WarehouseTable warehouses={warehouses} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Warehouse;
