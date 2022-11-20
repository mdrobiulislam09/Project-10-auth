import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ carts }) => {
    const {id, course, picture } = carts;
    
    return (
        <div className='carts'>
            <Card style={{ width: '16rem' }}>
                <Card.Img style={{ height: '10rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{course}</Card.Title>    
                    <Button variant="warning"><Link to ={`/course/${id}`}>Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;