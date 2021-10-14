import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import './Choose.css'

const Choose = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('./chef.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-5">
                    <h1 className='text-dark fs-2 fw-bold'>Why You Choose Us</h1>
                    <p className="text-align-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum id dolorem quidem est libero voluptatibus nemo sequi nesciunt quos ipsam illum quisquam, sunt ad voluptate.</p>
                </div>
                <div className="col-md-7"></div>
            </div>
            <div className='my-5'>
                <Row xs={1} md={2} lg={4} className="g-4 choose-item">
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        >

                        </Chef>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Choose;