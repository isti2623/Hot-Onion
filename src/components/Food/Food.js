import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Food = (props) => {
    const { title, desc, img, category, price } = props.item;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <p>Category: {category}</p>
                        <h6>Price: {price}</h6>
                    </Card.Body>
                    <div className="btn btn-danger">Details</div>
                </Card>
            </Col>
        </div>
    );
};

export default Food;