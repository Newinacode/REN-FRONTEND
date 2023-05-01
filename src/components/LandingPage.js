import React from 'react'
// import Navbar from './Navbar'
import Navbar from './Navbar'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Card,CardBody,CardHeader,Typography,CardFooter} from '@material-tailwind/react'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BiMap} from 'react-icons/bi'
function LandingPage() {

  useEffect(() => {
    
    axios.get("http://localhost:8000/post/").then((res)=>{
      console.log(res.data)
      setPostList(res.data)
    })
  
    
  }, [])
  
  const [postList,setPostList] = useState([])
  return (
    <div>
        <Navbar/>
        <div className='flex flex-col justify-between'>
                <div>
Left side
                    
                </div>
{/* recent post */}
<div className="flex gap-12 mt-14 ml-36">
{
postList.map((post)=>{
  return( <Card className="w-96">
  <CardHeader color="blue" className="relative h-56">
    <img
      src={post.images[0]["images"]}
      alt="img-blur-shadow"
      className="h-full w-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h5" className="mb-2">
      {post.title}
    </Typography>
    <Typography>
      {post.content}
    </Typography>
  </CardBody>
  <CardFooter divider className="flex items-center justify-between py-3">
  <TbCurrencyRupeeNepalese/>
  {post.price}

    <Typography variant="small">{post.price}</Typography>
    <Typography variant="small" color="gray" className="flex gap-1 items-center">
    <BiMap/>
<Typography>{post.location.split(",").at(-3)}</Typography>
    </Typography>
  </CardFooter>
</Card>)
})
}
</div>

                <div>

                </div>

{/* Recommended */}
    <div>
    <div className="flex  justify-center items-center gap-12 mt-6">
     <div>
     <Typography>Recommended</Typography>
     </div>
{
postList.map((post)=>{
  return( <Card className="w-96">
  <CardHeader color="blue" className="relative h-56">
    <img
      src={post.images[0]["images"]}
      alt="img-blur-shadow"
      className="h-full w-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h5" className="mb-2">
      {post.title}
    </Typography>
    <Typography>
      {post.content}
    </Typography>
  </CardBody>
  <CardFooter divider className="flex items-center justify-between py-3">
  <TbCurrencyRupeeNepalese/>
  {post.price}

    <Typography variant="small">{post.price}</Typography>
    <Typography variant="small" color="gray" className="flex gap-1">
      <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
{post.location.split(",").at(-3)}
    </Typography>
  </CardFooter>
</Card>)
})
}
</div>
    </div>
        </div>
    </div>
  )
}

export default LandingPage