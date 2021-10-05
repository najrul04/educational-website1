import React from 'react';
import { useEffect, useState } from 'react';
import Cards from '../Cards/Card';

const Home = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('FootballCourse.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return (
<<<<<<< HEAD
        courses.slice(0,5).map(course=><div
=======
        courses.slice(0,05).map(course=><div
>>>>>>> 611d0d742148fdcf387aea901ae5e064f6a8801f
        
        ><Cards course={course}></Cards
        
        
        ></div>)
    )
};

export default Home;
