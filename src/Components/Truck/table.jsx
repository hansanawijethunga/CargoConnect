const VehicleTable = ({vehicles , onSelect})=>{
    return (
        <div className="tableArea">
            <table>
                <thead>
                    <tr>
                        <th>Registration Number</th>
                        <th>Capacity</th>
                        <th>Model</th>
                        <th>Fuel Type</th>
                        <th>Condition</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index) => (
                        <tr key={index}>
                            <td>{vehicle.registrationNumber}</td>
                            <td>{vehicle.capacity}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.fuelType}</td>
                            <td>{vehicle.condition}</td>
                            <td><input type="button" value="Select" id={index} onClick={(e)=>onSelect(index)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleTable
