import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import BackgroundImage from '../assets/images/home.jpeg'
import {Typography,Card,CardHeader,CardBody,CardFooter,Button} from "@material-tailwind/react"
import {FaBed,FaParking,FaBath} from 'react-icons/fa'
import {GrSteps} from 'react-icons/gr'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {GiMultiDirections} from 'react-icons/gi'
import {BsBuildingAdd} from 'react-icons/bs'
import DisplayHome from '../containers/DisplayHome'
import DisplayLand from "../containers/DisplayLand"

function DisplayProperty() {

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
    <div className="bg-red-500 flex flex-col justify-items-end">
    <img className="px-10 w-10/12" src={BackgroundImage}/>
   
{/* body part */}
   <div className="flex justify-around ">

{/* side [description,title] */}
    <div className="w-7/12">
    <Card>
    
    <CardHeader>
    
    </CardHeader>
    <CardBody>
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
  <Card>
<CardBody className="flex flex-col gap-2">
<Typography>
Posted by:{property["author"]}
</Typography>

{ property["house"]?<DisplayHome property={property}/>:<><DisplayLand property={property}/></>
}



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