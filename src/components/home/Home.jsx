import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import data from "../../warehousedata.json"
import Styles from "./home.module.css"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate()
    const searchQuery = useSelector((state) => state.searchQuery);
    const [filteredCards, setFilteredCards] = useState([data]);
  console.log(filteredCards,"vbnm")
    useEffect(() => {
      const filtered = data.filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())||
        card.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
      
    setFilteredCards(filtered);
     
    }, [searchQuery]);
  

  return (
    <>
    <div className={Styles.container}>

   
    <h1>warehouse</h1>
    <div>
    <ul>
        {filteredCards.map(warehouse => (
       
          <li key={warehouse.id}>
          Name:{warehouse.name} 
          <br />
          City: {warehouse.city}
          <br />
          Cluster: {warehouse.cluster}
          <br />
          Space: {warehouse.space_available
}
          <br />
            <button className={Styles.btn} onClick={()=>{navigate('warehouse',{replace:true,state:{warehouse}})}}> View</button>
         </li>
      
        ))}
      </ul>

    </div>
    </div>
    </>
  )
}

export default Home