import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Card } from 'react-bootstrap';

const Cards = (props) => {
    const {title,price,img,details}=props.course;
    return (
        <div>


           <Card style={{ width: '100%' }}>


  <Card.Img style={{height:'15rem'}} variant="top" src={img}/>


  <Card.Body>

    <Card.Title>{title}</Card.Title>

    <Card.Text>

      <h1>{price}</h1>
      <p>{details}</p>

    </Card.Text>

    <Button className="bg-dark text-white rounded-pill my-3 p-2 "> Purchase </Button>

  </Card.Body>

</Card> 
        </div>
    );
};

export default Cards;