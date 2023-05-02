import React from 'react'
import Navbar from './Navbar'
import {Input,Button,Typography} from '@material-tailwind/react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate,useLocation} from 'react-router-dom';
import {useParams} from "react-router-dom"


function OPT() {
    const { userId } = useParams();
    const {state} = useLocation();


    const navigate = useNavigate()

    const email = state.email
    const [optValue,setOptValue] = useState()

    const handleSubmit = (e) =>{
        axios.post(`http://localhost:8000/auth/verifyopt/${userId}`,{otp:optValue}).then(
            (res)=>{
                navigate('/home')
            }
        )

        navigate('/login')

        e.preventDefault()
    }
  return (
    <div>
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <div className="flex ">
                <div>
                    <Typography>OTP is send in your email:{email}</Typography>
                </div>
            <div>
            <Typography>Enter OPT</Typography>
            <Input onChange={(e)=>{setOptValue(e.target.value)}}/>
            </div>
            </div>
            <Button value='submit' type="submit">Submit</Button>
        </form>


    </div>
  )
}

export default OPT