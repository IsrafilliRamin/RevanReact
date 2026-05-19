
import { FaShieldHeart } from "react-icons/fa6";

const Revan = ({ hello, color }) => {


  




    return (
        <div style={{ backgroundColor: color }}>
            <h1>Revan Salam  <FaShieldHeart /></h1>
            <p>{hello}</p>
        </div>
    )
}


export default Revan;