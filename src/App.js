import './App.css';
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import DisplayHouse from './containers/DisplayHome'
import AddProperty from './components/AddProperty';
import 'leaflet/dist/leaflet.css';
import Testing from './components/Testing';
import DisplayProduct from './components/DisplayProperty';
import Protected from './components/Protected';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/house/:id" element={<DisplayHouse/>}/>
        <Route path='/addproperty' element={
          <Protected Component ={AddProperty}/>
        }/>
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/property/:propertyId" element={<DisplayProduct/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
