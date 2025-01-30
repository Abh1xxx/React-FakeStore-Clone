import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ data }) {
  return (
    
      <Card className='h-100 cards'>
        <Card.Img variant="top" src={data.image} className='productimage' />
        <Card.Body>
          <Card.Title>{data.title.slice(0,30)}</Card.Title>
          <Card.Text>
           {data.description.slice(0,100)}...
          </Card.Text>
         
          
        </Card.Body>
         <div className="d-flex justify-content-between align-items-center">
          {/* d-flex justify-content-between align-items-center */}
          <p className='mb-0 fw-bold'>${data.price}</p>
          
          <Button variant="primary" className='p-1 rounded-0'>View Details</Button>
          </div>
      </Card>
    
  )
}

export default Cards
