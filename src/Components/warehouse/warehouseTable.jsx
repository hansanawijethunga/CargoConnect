const WarehouseTable = ({warehouses,onSelect}) =>{
    return (
        <div className="tableArea">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Type</th>                      
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map((warehouse, index) => (
                        <tr key={index}>
                            <td>{warehouse.name}</td>
                            <td>{warehouse.location}</td>
                            <td>{warehouse.type}</td>                            
                            <td><input type="button" value="Select" id={index} onClick={(e)=>onSelect(index)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default WarehouseTable