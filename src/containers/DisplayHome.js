import React from 'react'
import {useParams} from "react-router-dom"
import Navbar from '../components/Navbar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Typography,Card,CardHeader,CardBody,CardFooter,Button} from "@material-tailwind/react"
import {FaBed,FaParking,FaBath} from 'react-icons/fa'
import {GrSteps} from 'react-icons/gr'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {GiMultiDirections} from 'react-icons/gi'
import {BsBuildingAdd} from 'react-icons/bs'

function DisplayHome(props) {
  const property = props.property
  return (
    <div>
    <div className="flex gap-6">
<div>
<FaBed/>
{property["house"]["no_of_bedrooms"]}
</div>

<div>
<FaBath/>
{property["house"]["no_of_bathrooms"]}
</div>

<div>
<GrSteps/>
{property["house"]["no_of_floor"]}
</div>
<div className='flex flex-col items-center'>
<FaParking/>
{property["house"]["parking_area"]} sq. ft
</div>
</div>


{/* price section */}
<div className=''>
<Card>
<CardBody>


<div className='flex justify-center items-center gap-2'>
<TbCurrencyRupeeNepalese/>
{property["house"]["price"]}
</div>



</CardBody>
</Card>
</div>

<Card>
<CardBody>

<div className='flex justify-center items-center gap-2'>
<GiMultiDirections></GiMultiDirections>
{property["house"]["facing_side"]} 
</div>


</CardBody>
</Card>


<Card>
<CardBody>

<div className='flex justify-center items-center gap-2'>
<BsBuildingAdd></BsBuildingAdd>
{property["house"]["built_date"]} 
</div>


</CardBody>
</Card>


<Button>
Interested
</Button>


    </div>
  )
}

export default DisplayHome