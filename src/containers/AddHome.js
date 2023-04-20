import React from 'react'
import {useState} from 'react'
import {Button,CardBody,Input,Typography} from '@material-tailwind/react'
import {GiTap} from 'react-icons/gi'
import {GrCloudUpload} from 'react-icons/gr'
import {Card} from "@material-tailwind/react"
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BsFillHouseAddFill} from 'react-icons/bs'
function AddHome() {
  const [areas,setAreas] = useState({
    area1:"Bigaa",
    area2:"Katha", 
    area3:"Dhur"
  })
  const [region,setRegion] = useState()

  const handleChange = (e,regionVal) => {
    if(regionVal==0){ 
      setRegion(true)
      setAreas({
        area1:"Bigaa",
        area2:"Katha", 
        area3:"Dhur"
      })
    }
    else if(regionVal==1){
      setRegion(true)
      setAreas({
        area1:"Ropani",
        area2:"Aana", 
        area3:"Paisa"
      })
    }
  
  console.log(areas)
  }

  return (
    <div className="flex flex-col gap-6">

        {/* year */}
    <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Date</Typography>
    <input type="date"/>
    </div>

  {/* property for */}

  <div className="flex flex-col gap-2">

<Typography variant="h6">Region</Typography>
    <div className="flex justify-around w-2/6">

        <Button className="" onClick={e=>{handleChange(e,"0")}}>
          <p>Terai</p>
        </Button>
        <Button className="" onClick={e=>{handleChange(e,"1")}}>
          <p>
          Hilly and Mountain
          </p>
        </Button>
        </div>

</div>





     {/* Area */}
    <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Area</Typography>

    <div className="flex justify-between">
    <Input label={areas["area1"]}/>
    <Input label={areas["area2"]}/>
    <Input label={areas["area3"]}/>
    </div>
 
    </div>


    {/* Road */}
    <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Road</Typography>
    <Input label="ft"/>
    </div>

    {/* Road */}
    <div className="flex flex-col h-5/6 w-1/6 gap-2"> 
    <Typography variant="h6">Parking Space</Typography>
    <Input label="sq.ft"/>
    </div>

    

    {/* House Features */}
    <div className="flex flex-col gap-2">
       <Typography variant="h6">House Features</Typography>
    <div className="grid grid-rows-2 grid-flow-col gap-4"> 
   
    <Input label="Bed"/>
    <Input label="Bedroom"/>
    <Input label="Bathroom"/>

    
    
    </div>

    <div className="grid grid-col-8 grid-flow-col gap-4 mt-4">

      
    <Card className="flex justify-center px-2">
    
    <GiTap className="" color="#259BC4" size="2rem"></GiTap>
     <Typography variant="h6">Water</Typography>
    
     </Card>

     <Card className="flex px-5">
    
    <GiTap className="" color="#259BC4" size="2rem"></GiTap>
     <Typography variant="h6">Water</Typography>
    
     </Card>


     <Card className="flex px-5">
    
    <GiTap className="" color="#259BC4" size="2rem"></GiTap>
     <Typography variant="h6">Water</Typography>
    
     </Card>


     <Card className="flex px-5">
    
    <GiTap className="" color="#259BC4" size="2rem"></GiTap>
     <Typography variant="h6">Water</Typography>
    
     </Card>


     




    </div>

    <div>
    <Button variant="gradient" className="flex items-center gap-3">
        <GrCloudUpload className="h-5 w-5" color="#F7FBFC"/> Upload Images
      </Button>
    </div>


    <div> 
    <div className="w-72">
      <Input label="Price" icon={<TbCurrencyRupeeNepalese/>} type="number"/>
    </div>
    </div>

    <div> 
    <div className="w-72">
      <Input label="title"/>
    </div>
    </div>

    <div> 
    <div className="w-72">
      <Button className="flex items-center gap-3" color='green'>
  <BsFillHouseAddFill size="2rem"/>
<Typography variant="h6">Add</Typography>
      </Button>
    </div>
    </div>

    </div>
    
    </div>
  )
}

export default AddHome