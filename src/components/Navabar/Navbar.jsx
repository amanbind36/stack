import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Styles from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
      };
    
      const handleSearchButtonClick = () => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: searchInput });
      };
    
  return (
    <div className={Styles.container}>
      
        <h1>Stackarea</h1>


    
     
      <div  >
                <input
                  type="text"
                  placeholder="Where to"
                   // Apply specific CSS class for the input field
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button  type="submit" onClick={handleSearchButtonClick}>
                 search
                </button>
              </div>
    </div>
  )
}

export default Navbar