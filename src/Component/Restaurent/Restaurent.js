import React from 'react';

const Restaurent = () => {
    const Search=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <input onChange={Search} type="text" name="" id="" />
        </div>
    );
};

export default Restaurent;