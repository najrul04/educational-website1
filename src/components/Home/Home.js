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
        courses.slice(0,6).map(course=><div><Cards course={course}></Cards></div>)
    )
};

export default Home;