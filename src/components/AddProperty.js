import Navbar from './Navbar'
import AddHome from '../containers/AddHome'
import AddLand from '../containers/AddLand'
import { useState,useEffect } from 'react'
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
    "title": "",
    "content": "",
    "purpose": null,
    "area_formating": null,
    "area1": 0,
    "area2": 0,
    "area3": 0,
    "price": 0,
    "property_type": null,
    "no_of_bedrooms": 0,
    "no_of_bathrooms": 0,
    "no_of_floor": 0,
    "parking_area": 0,
    "facing_side": "",
    "built_date": 0,
    "location": "1",
    "street": "1",
    "city": "1",
    "longitude": 1,
    "latitude": 1,
    "author": user["userState"]["id"]
}
 

 
    // const [center,setCenter] = useState({lat:13.084622,lng:80.248357}) 
    // const ZOOM_LEVEL = 9
    const [property,setProperty] = useState();
    const [sell,setSell] = useState(false);
    const [rent,setRent] = useState(false) 
    const [home,setHome] = useState(false);
    const [land,setLand] = useState(false) 
    const [images,setImages] = useState()
  
    

  useEffect(()=>{
    
  },[])


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
      setProperty({...template,"property_type": "H",},)
      setLand(false)
    }

    const handleLand = (event) =>{
      setLand(true)
      setProperty({...template,"property_type": "L",
    },)
      setHome(false)
    }

    const handleRent = (event) =>{

      setProperty({...property,"purpose":"RT"})
      setRent(true)
      setSell(false)
      
      // if(home){
      //   setProperty({...property,house:{...property["house"],purpose:"SL"}})
        
      // }
      // else{
      //   setProperty({...property,land:{...property["land"],purpose:"SL"}})
      // }
    }

    const handleSell = (event) =>{
      setSell(true)
      setRent(false)
      setProperty({...property,"purpose":"SL"})

      
      // if(home){
      //   setProperty({...property,house:{...property["house"],purpose:"SL"}})
      // }
      // else{
      //   setProperty({...property,land:{...property["land"],purpose:"SL"}})
      // }
      
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

      <Button className='p-4 w-24' onClick={handleHome} variant={home?"filled":"outlined"}>Home</Button>
      <Button className='p-4 w-24' onClick={handleLand} variant={land?"filled":"outlined"}>Land</Button>
      </div>

</div>


{/* property for */}

<div className="flex flex-col gap-2">

<Typography variant="h6">For</Typography>
  <div className="flex justify-between w-56">

      <Button className='p-4 w-24' onClick={handleSell} variant={sell?"filled":"outlined"}>Sell</Button>
      <Button className='p-4 w-24' onClick={handleRent} variant={rent ?"filled":"outlined"}>Rent</Button>
      </div>

</div>




{
home?<AddHome  img={setImages} property={property} setProperty={setProperty}/>:<AddLand property={property} setProperty={setProperty}/>
}
</div>



<Button className="mx-6 mb-6 mt-4" type="submit">submit</Button>
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