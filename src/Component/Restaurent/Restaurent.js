import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurent.css'

const Restaurent = () => {
    const [search,setSearch]= useState('')
    const [meals,setMeals]=useState([])
    useEffect( ()=>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>setMeals(data.meals))
    },[search])
    const Search=(e)=>{
        setSearch(e.target.value)
    }
    
    return (
        <div >
            <input onChange={Search} type="text" name="" id="" />
            <div className='restaurent'>
            {
                meals.map(meal=> <Meal
                meal={meal}
                key={meal.idMeal}
                ></Meal>)
            }

            </div>
           
        </div>
    );
};

export default Restaurent;

