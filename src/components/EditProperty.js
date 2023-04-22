import Navbar from './Navbar'
import AddHome from '../containers/AddHome'
import AddLand from '../containers/AddLand'
import { useState,useRef } from 'react'
import React from 'react'
import {Button,Typography} from "@material-tailwind/react"
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Marker,Popup} from 'react-leaflet'
import osm from "../osm-providers"
import FormData from 'form-data';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
function AddProperty() {
  
  const {user} = useSelector((state)=>state)
  
  // if(!user){
  //   return <Navigate to="/login"/>
  // }


  const navigate = useNavigate()
  const template = {
    
    "map": {
        "location": "1",
        "street": "1",
        "city": "1",
        "longitude": 1,
        "latitude": 1,
        "post": null
    }, 
   
    "title": "12",
    "content": "12",
    "author": 1
}
 

 
    // const [center,setCenter] = useState({lat:13.084622,lng:80.248357}) 
    // const ZOOM_LEVEL = 9
    const [property,setProperty] = useState();
    const [sell,setSell] = useState(false);
    const [rent,setRent] = useState(false) 
    const [home,setHome] = useState(false);
    const [land,setLand] = useState(false) 
    const [images,setImages] = useState()
  



  const onSubmit = (e) =>{
    // const uploadData = new FormData(); 
    // uploadData.append('title',property["title"]); 
    // uploadData.append('author',1)
    // uploadData.append('content','fsdafasfsafas')
    
    // if(home){ 
    //   uploadData.append('land',null)
    //   uploadData.append('house',JSON.stringify(property["house"]))
    // }
    // uploadData.append("map",JSON.stringify(property["map"]))


    // for(let item of uploadData){
    //   console.log(item[0],item[1])
    // }
    

    
    axios.post('http://127.0.0.1:8000/posts/',property, {    
  }).then((res)=>{
    console.log(res)  
    navigate(`/property/${res.data.id}`)
  }).catch((error)=>{
    console.log(error.message)
  })

    e.preventDefault(); 
    
  }



    const handleHome = (event) =>{
      setHome(true)
      setProperty({...template,house:{
        "purpose": "RT",
        "area_formating": "TE",
        "area1": 1,
        "area2": 2,
        "area3": 3,
        "price": 4,
        "property_type": "H",
        "no_of_bedrooms": 12,
        "no_of_bathrooms": 12,
        "no_of_floor": 12,
        "parking_area": 12,
        "facing_side": "NE",
        "built_date": "2012-12-1",
        "post": null
    },})
      setLand(false)
    }

    const handleLand = (event) =>{
      setLand(true)
      setProperty({...template,land:{
        "purpose": null,
        "area_formating": null,
        "area1": null,
        "area2": null,
        "area3": null,
        "price": null,
        "property_type": "L",
        "post": null
    },})
      setHome(false)
    }

    const handleRent = (event) =>{
      setRent(true)
      setSell(false)
      
      if(home){
        setProperty({...property,house:{...property["house"],purpose:"SL"}})
        
      }
      else{
        setProperty({...property,land:{...property["land"],purpose:"SL"}})
      }
    }

    const handleSell = (event) =>{
      setSell(true)
      setRent(false)
      
      if(home){
        setProperty({...property,house:{...property["house"],purpose:"SL"}})
      }
      else{
        setProperty({...property,land:{...property["land"],purpose:"SL"}})
      }
      
    }


    

    // const mapRef = useRef()
    return (
    <div className="flex flex-col gap-6">
        
        <Navbar/>

{/* body div */}
<div class="flex">


{/* left side form */}
<form onSubmit={onSubmit}>
<div className="flex flex-col mx-6 gap-6 w-2/3">

  

     {/* property type */}

     <div className="flex flex-col gap-2">

     <Typography variant="h6">Property Type</Typography>
  <div className="flex justify-between w-56">

      <Button onClick={handleHome} variant={home?"filled":"outlined"}>Home</Button>
      <Button onClick={handleLand} variant={land?"filled":"outlined"}>Land</Button>
      </div>

</div>


{/* property for */}

<div className="flex flex-col gap-2">

<Typography variant="h6">For</Typography>
  <div className="flex justify-between w-52">

      <Button onClick={handleSell} variant={sell?"filled":"outlined"}>Sell</Button>
      <Button onClick={handleRent} variant={rent ?"filled":"outlined"}>Rent</Button>
      </div>

</div>




{
home?<AddHome  img={setImages} property={property} setProperty={setProperty}/>:<AddLand property={property} setProperty={setProperty}/>
}
</div>



<Button type="submit">submit</Button>
</form>

{/* map  */}
{/* <div>
<MapContainer
center={center}
zoom={ZOOM_LEVEL}
ref={mapRef}
>
<TileLayer
url={osm.url}
attribution={osm.attribution}
/> 
</MapContainer>
</div> */}

</div>

    </div>
  )
}

export default AddProperty