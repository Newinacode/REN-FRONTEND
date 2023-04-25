import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import BackgroundImage from '../assets/images/home.jpeg'
import {Typography,Card,CardHeader,CardBody,CardFooter,Button,Chip} from "@material-tailwind/react"
import {FaBed,FaParking,FaBath} from 'react-icons/fa'
import {GrSteps} from 'react-icons/gr'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {GiMultiDirections} from 'react-icons/gi'
import {BsBuildingAdd} from 'react-icons/bs'
import DisplayHome from '../containers/DisplayHome'
import DisplayLand from "../containers/DisplayLand"
import { useSelector } from 'react-redux';
import { prototype } from 'form-data'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';



function DisplayProperty() {
  const navigate = useNavigate()

  const PROPERTY_TYPE = {
    "H":"HOUSE",
    "L":"LAND"
  }
  const {user} = useSelector((state)=>state)
  const [property,setProperty] = useState()
  const { propertyId } = useParams();
  console.log(propertyId)
  useEffect(()=>{
     axios.get(`http://localhost:8000/posts/${propertyId}/`).then((res)=>{
      setProperty(res.data)
      console.log(property)    
    })
  },[])
  return (
    <>
    {property?<div>
    <Navbar/>
    <div className="flex flex-col justify-items-end">
    <Card className="flex justify-center">


    <img className="object-contain px-10 h-96 w-10/12 pb-2" src={property["images"][0]["images"]}/>
    </Card>
   
{/* body part */}
   <div className="flex justify-around h-96">

{/* side [description,title] */}
    <div className="">
    <Card className="mt-2 h-80 w-[1200px]">
    
    <CardHeader>
    
    </CardHeader>
    <CardBody>
    <Chip color="teal" value={property?PROPERTY_TYPE[property["property_type"]]:PROPERTY_TYPE[property["property_type"]]} />
    <Typography variant="h2">{property["title"]}</Typography>
    <Typography>
      <Typography variant="h6">Description:</Typography>
   {property["content"]}
    </Typography>
    </CardBody>
    </Card>
    </div>
{/* side contains user information and house information */}
  <div>
  <Card className="mt-2 w-64">
<CardBody className="flex flex-col gap-2">
<Typography>
Posted by:{property["author"]}
</Typography>

{ property["property_type"]==="H"?<DisplayHome property={property}/>:<><DisplayLand property={property}/></>
}

  {user && user["userState"]["id"]==property["author"]?
  

  <Button onClick={()=>navigate(`/edit/${property["id"]}`)}>

  Edit
  
  </Button>
  :<Button>
  Interested
  </Button>}


</CardBody>
    </Card>
  </div>

   </div>

         
    </div>


</div>:<></>  
  }
    </>
  )
}

export default DisplayProperty