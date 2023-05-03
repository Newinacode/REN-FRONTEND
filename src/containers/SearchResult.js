import React, { useEffect } from 'react'
import {useState} from 'react'
import {Card,CardBody,CardHeader,Typography,CardFooter} from '@material-tailwind/react'
import {TbCurrencyRupeeNepalese} from 'react-icons/tb'
import {BiMap} from 'react-icons/bi'
import axios from 'axios'
function SearchResult(props) {
  console.log("serach result is called")
  const setProperties = props.setProperties
  const data = props.data
  useEffect(()=>{
    console.log(data)
    axios.post("http://localhost:8000/post/search/",data).then((res)=>{
      console.log(res.data)
      setPostList(res.data)
      setProperties(res.data)
      console.log("data",postList)
console.log('got here sathi')   
 }).catch((e)=>{console.log(e)})
  },[data])
 
  const address = props.address

  const [postList,setPostList] = useState([])
  return (
   <div class="flex flex-col items-center">
     <Typography >Results</Typography>

<div className="flex flex-col items-center h-[800px] overflow-auto">
  <div className="flex flex-col gap-12 mt-14">
{
postList.map((post)=>{
return( <Card className="w-96">
<CardHeader color="blue" className="relative h-56">

  {
    post.images.length>0?<img
    src={post.images[0]["images"]}
    alt="img-blur-shadow"
    className="h-full w-full"
  />:
  <></>
  }

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
</div>
   </div>
  )
}

export default SearchResult