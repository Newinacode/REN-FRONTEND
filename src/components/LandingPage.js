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
        <div className='flex justify-between'>
{/* recent post */}
<div className="flex flex-col gap-12 mt-14 ml-36">
{
postList.map((post)=>{
  return( <Card className="w-[96] h-[400px]">
  <CardHeader color="blue" className="relative h-72">
    <img
      src={post.images[0]["images"]}
      alt="img-blur-shadow"
      className="h-full w-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography variant="h5" className="mb-2 text-left">
      {post.title}
    </Typography>
    <Typography className="text-left">
      {post.content.length>100?post.content.slice(0,100)+".......":post.content}
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





{/* recent post */}
<div className="flex flex-col gap-12 mt-14 ml-36 h-[500px] w-1/2 overflow-auto">
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
    <Typography variant="h5" className="mb-2 text-left">
      {post.title}
    </Typography>
    <Typography className="text-left">
      {post.content.length>100?post.content.slice(0,100)+".......":post.content}
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





        </div>

        
    </div>
  )
}

export default LandingPage