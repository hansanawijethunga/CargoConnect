import { useParams } from "react-router-dom";

const Myprofile = ()=>{
    const { id } = useParams();
    return(
        <h3>Use Profile: {id}</h3>
    )
}

export default Myprofile