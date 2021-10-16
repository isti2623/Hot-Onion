import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FoodDetails = () => {
    const { foodId } = useParams();
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/isti2623/Hot-Onion/main/public/lunch.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const findFoods = foods.find(food => food.id == foodId)

    return (
        <div className='container mb-5'>
            <div className="row">
                <div className="col-md-6">
                    <h1 className='mt-5'>{findFoods?.title}</h1>
                    <img className='w-25' src={findFoods?.img} alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <h5 className='mt-5'>{findFoods?.desc}</h5>
                    <h3>price:{findFoods?.price}</h3>
                    <h3>category:{findFoods?.category}</h3>


                </div>
            </div>

        </div>
    );
};

export default FoodDetails;