import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Card';

const Services = () => {
    const [courses,setCourses]=useState([]);
  useEffect(()=>{
    fetch('FootballCourse.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
    return (
        courses.map(course=><div><Cards course={course}></Cards></div>)
    );
};

export default Services;