import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Food from '../Food/Food';
import './TabItem.css'

const TabItem = () => {
    const [items, setItems] = useState([])
    const [showItems, setShowItems] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/isti2623/Hot-Onion/main/public/lunch.json')
            .then(res => res.json())
            .then(data => {

                setItems(data)
                setShowItems(data);
            })
    }, [])

    const filterItem = (categItem) => {
        const updatedItems = items.filter((curEle) => {
            return curEle.category === categItem;
        });
        setShowItems(updatedItems);


    }
    return (
        <>
            <div className='mt-5 mb-5 menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    <div className="btn btn-danger" onClick={() => filterItem('breakfast')}>Breakfast</div>
                    <div className="btn btn-danger" onClick={() => filterItem('lunch')}>Lunch</div>
                    <div className="btn btn-danger" onClick={() => filterItem('dinner')}>Dinner</div>
                    <div className="btn btn-danger" onClick={() => setShowItems(items)}>All</div>
                </div>
            </div>
            <Row xs={1} md={2} lg={4} className="g-4 tab-item">
                {
                    showItems.map(item => <Food
                        key={item.id}
                        item={item}
                    >

                    </Food>)
                }
            </Row>
        </>
    );
};

export default TabItem;