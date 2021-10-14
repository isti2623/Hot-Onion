import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Chef = (props) => {
    const { title, desc, img, icon } = props.chef;
    return (
        <div>
            <Col>
                <Card>
                    <img src={img} alt="" srcset="" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <img src={icon} alt="" srcset="" />
                        <p className='text-danger fw-bold'>See More</p>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default Chef;