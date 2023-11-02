import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Styles from './ware.module.css'
const WarehouseDetails = () => {
    const location=useLocation();
    
    console.log(location.state,"location")
    const { id } = useParams();
    const data=location.state.warehouse

    const [user, setUser] = useState(data);
    const [isEditing, setEditing] = useState(false);
    console.log("Data",data)



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };


      const handleSave = () => {
        // Perform save operation, update state, or send data to a backend server.
        console.log('User data saved:', user);
        setEditing(false);
      };
   
  return (
    <div>
              <h2>Warehouse Information</h2>


     {isEditing ? (
        <div>
          <label>
            Name:
            <input type="text" name="name" value={user.name} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            City:
            <input type="text" name="city" value={user.city} onChange={handleInputChange} />
          </label>
          <br />
          <label>
          cluster:
            <input type="text" name="cluster" value={user.cluster} onChange={handleInputChange} />
          </label>
          <br />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className={Styles.li}>
          <p>Name: {user.name}</p>
          <p>Cluster: {user.cluster}</p>
          <p>City: {user.city}</p>
          <button className={Styles.btn} onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default WarehouseDetails