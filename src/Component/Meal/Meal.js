import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strMealThumb } = props.meal
    return (
        <div className='card'>
            {/* <h1>{strMeal} {idMeal}</h1> */}
            <Card  style={{ width: '10rem' }}>
                <Card.Img style={{height: '300px'}} src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                   
                </Card.Body>
            </Card>

        </div>
    );
};

export default Meal;