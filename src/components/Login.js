import React from 'react'
import Navbar from './Navbar'
import {useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button,Input,Alert} from '@material-tailwind/react'
import {IoWarningOutline} from 'react-icons/io5'
import { useDispatch } from "react-redux";
import {AddUserInformation} from "../actions/App"

function Login() {
  const navigate = useNavigate()
  const [showError,setShowError] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const dispatch = useDispatch();

  const onSubmit = (e) => {
   
    const email = e.target[0].value
    const password = e.target[1].value
    console.log("working")
    axios.post('http://localhost:8000/auth/login/',{email:email,password:password}).then(
      (response)=>{
        console.log(response.status)
        dispatch(AddUserInformation(response.data))
        axios.post("http://localhost:8000/api/token/",
          {email:email,password:password}
        ).then(
            (res)=>{
              localStorage.setItem("access_token",res.data.access)
              localStorage.setItem("refresh_token",res.data.refresh)
              axios.get("http://localhost:8000/")

            }
            
        )

        navigate("/")
      }
    ).catch(error=>{
      setErrorMessage(error.message)
      setShowError(true)
      console.log(error)
    })

    e.preventDefault(); 

  }
  return (
    <div>
        <div><Navbar/></div>
        <div class="h-screen flex">
    <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
      <div>
        <h1 class="text-white font-bold text-4xl font-sans">Real Estate Nepal</h1>
        <p class="text-white mt-1">Signin and Start Browser New Properties</p>
        {/* <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
      </div>
    </div>
    <div class="flex gap-3 w-1/2 justify-center items-center bg-white">
      <form class="bg-white" onSubmit={onSubmit}>
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
        <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
        
        <div className="mb-3">
        <Input label="email" error={showError}></Input>
        </div>
        <div>
        <Input type="password" label="password" error={showError}></Input>
        </div>
        <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
        <Alert
      show={showError}
      color="red"
      icon={<IoWarningOutline className="h-6 w-6"/>}
      dismissible={{
        onClose: () => showError(false),
        action: (
          <Button variant="text" color="white" size="sm">
            Close
          </Button>
        ),
      }}
      >
          Invalid credentials. Try again.
      </Alert>
        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer" onClick={()=>{navigate('/register')}}>Register</span>

        
      
      </form>
      
    </div>
  </div>
  </div>
  )
}

export default Login