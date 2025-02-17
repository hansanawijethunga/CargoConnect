import '../styles/components/controll.css'

const ControllButton = ({ onSave, onUpdate, onDelete, onClear , selectedIndex}) => {

  // const [selectedVehicle, setSelectedVehicle] = useState({});
  return (
    <div className="controllButtons">
      {/* Conditionally render the Add or Update button */}
      {selectedIndex || selectedIndex ===0   ? (
        <>
          <button type="button" className="submit-btn" onClick={onUpdate}>
            Update
          </button>
          {/* Add Delete button if selectedVehicle exists */}
          <button
            type="button"
            className="delete-btn"
            onClick={onDelete}
          >
            Delete
          </button>
        </>
      ) : (
        <button type="button" className="submit-btn" onClick={onSave}>
         Save
        </button>
      )}

      {/* Always show the Clear button */}
      <button
        type="button"
        className="clear-btn"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default ControllButton;
