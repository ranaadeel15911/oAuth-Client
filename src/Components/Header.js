import React, { useEffect, useState } from 'react'
import "./header.css"
import { NavLink } from "react-router-dom"
import axios from "axios"

const Header = () => {
    const [userdata, setUserdata] = useState({});
    // console.log(userdata)
    // console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("https://o-auth-server-kappa.vercel.app/login/sucess", { withCredentials: true });
//at that point we are also sending , { withCredentials: true } it means when user is loged in and credential true we will sending 
//this to the route which we made in abckend a function 
/* app.get("/login/sucess",async(req,res)=>{
console.log(req)
    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

from here we will get req.user */            

            setUserdata(response.data.user)
        } catch (error) {
            // console.log("error", error.response.data.message)
            // alert(error.response.data.message)
        }
    }

    // logoout
    const logout = ()=>{
        window.open("https://o-auth-server-kappa.vercel.app/logout","_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <h1>Harsh Pathak</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                    <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
                                        <li>
                                            <NavLink to="/dashboard">
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li onClick={logout}>Logout</li>
                                        <li>
                                            <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
                                        </li>
                                    </>
                                ) : <li>
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                  

                                </li>
                            }



                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header