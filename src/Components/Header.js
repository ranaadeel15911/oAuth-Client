import React,  { useEffect, useState }  from 'react'
import "./header.css"
// import { NavLink } from "react-router-dom"
// import axios from "axios"

const Header = () => {
//     const [userdata, setUserdata] = useState({});

//     const getUser = async () => {
//         try {
//             const response = await axios.get("https://o-auth-server-kappa.vercel.app/login/sucess", { withCredentials: true });          
//             setUserdata(response.data.user)
//         } catch (error) {
//             console.log("error", error.response.data.message)
//             // alert(error.response.data.message)
//         }
//     }
// useEffect(() => {
//         getUser()
//     }, [])
    // logoout
    // const logout = ()=>{
    //     window.open("https://o-auth-server-kappa.vercel.app/logout","_self")
    // }

    
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
     <li>
        <NavLink to="/dashboard">
                                                Dashboard
                                            </NavLink>
                                        </li>
                            {
                                Object?.keys(userdata)?.length > 0 ? (
                                    <>
                                    <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
                                        // <li>
                                        //     <NavLink to="/dashboard">
                                        //         Dashboard
                                        //     </NavLink>
                                        // </li>
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
