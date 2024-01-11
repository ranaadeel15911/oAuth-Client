import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:900/login/sucess", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
      // alert(error.response.data.message)
      console.log(error.response.data.message)
      navigate("/*")
    }
}

useEffect(() => {
  getUser()
}, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard