import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {RemoveUser} from "../actions/App"
import { useNavigate } from 'react-router-dom';
import { Avatar 
    ,Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button, } from "@material-tailwind/react";

function Navbar() {
    const {user} = useSelector((state)=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleLogout =(e) =>{
        
        dispatch(RemoveUser())
        console.log(user)
        navigate('/')
    }
  return (
        // main Navbar 
        <div className="flex flex-row justify-between">

        {/* for home button and  menu (buy,rent,sell)*/}
    <div className="flex flex-row p-4 justify-between  items-center w-3/12">
        <p className="font-foundationLogo text-4xl cursor-pointer">
            REN
        </p>

       
        <div className="flex items-center justify-center font-medium  hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Buy</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Sell</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-1/3 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Rent</p  >
        </div>
       

    </div>

    {/* for other features like saved house,login/sign up, */}
    <div className="flex flex-row p-4 justify-between items-center w-7/12 pl-36 ">
        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12  h-full hover:text-white cursor-pointer">
            <p className="text-lg">Saved Homes</p>
        </div>

        <div className="flex items-center justify-center font-medium hover:bg-teal-700 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg">Malpod</p>
        </div>



        {


        user?<>

                <Menu>
                    <MenuHandler>
                    <div className="flex gap-4">
     
     <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="avatar" variant="circular" />
   </div>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Setting</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        
                    </MenuList>
                    </Menu>



        
        </>:
        <div className="flex items-center justify-center font-medium border-2 hover:bg-gray-400 rounded-md w-4/12 h-full hover:text-white cursor-pointer">
            <p className="text-lg"><NavLink to="/login">Login or Sign up</NavLink>
</p>
        </div>

}
    </div>
    </div>
  )
}

export default Navbar