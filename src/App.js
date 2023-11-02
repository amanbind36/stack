import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navabar/Navbar';
import { Provider } from 'react-redux';
import Home from './components/home/Home';
import store from './components/home/Store';
import WarehouseDetails from './components/list/WarehouseDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
    
      <Router>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/warehouse" element={<WarehouseDetails/>} />
          {/* <Route path="/warehouse" component={WarehouseDetails} /> */}
        </Routes>
      </div>
    </Router>
       
       
      </Provider>

    </div>
  );
}

export default App;
