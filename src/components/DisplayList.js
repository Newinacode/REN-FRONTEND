import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function DisplayList() {

    const [posts,setPost] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/posts/").then((res)=>{
            console.log(res.data)
        setPost(res.data)
        }

        )
    },[])


  return (
    <div className="flex flex-col items-start w-full">
        <div className="flex justify-center font-bold text-3xl">
        Recent Post
        </div>
            <div class="flex justify-around">
                {
                    posts.map((post)=>{
                        return (<div>
            <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{post.title}</h5>
            <p class="text-gray-700 text-base mb-4">
            {post.content}
            </p>

            
            <Link to={'house/' + post.id}>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><div>
            See Property
            
            </div>
            
            </button>
            </Link>
        </div>
</div>
            </div>)

                    })
                }
            </div>
    </div>
  )
}

export default DisplayList