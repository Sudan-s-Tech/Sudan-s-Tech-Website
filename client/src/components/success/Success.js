import axios from 'axios';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import './Success.css'
function Success() {
    let history = useHistory()
    const course_id = localStorage.getItem('courseid')
    const data = localStorage.getItem("username");
    const token = localStorage.getItem("tokens");
console.log(course_id)
console.log(data)
console.log(token)
useEffect(() => {
    axios({
        method: "post",
        url: ("https://sudan-tech-backend.herokuapp.com/users/buy/"+course_id),
        headers: {
            'Authorization': 'Bearer ' + token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":"*",
        },
      })
        .then((res) => {
          console.log(res);
          localStorage.removeItem('courseid')
          history.push('/dashboard')
        })
        .catch((e) => {
          console.log(e.response);
        });
}, [])
    return (
        <div className='success'>
            <h2>We are adding course to your dashboard...</h2>
        </div>
    )
}

export default Success
