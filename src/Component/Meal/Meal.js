import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Meal.css'

const Meal = (props) => {
    const { strMeal, strMealThumb } = props.meal
    return (
        <div className='cards'>
            {/* <h1>{strMeal} {idMeal}</h1> */}
            <Card>
                <Card.Img style={{height: '300px'}} src={strMealThumb} />
                <Card.Body>
                    <h1>{strMeal}</h1>
                   
                </Card.Body>
            </Card>

        </div>
    );
};

export default Meal;