import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const { title, desc, img, category, price, id } = props.item;
    const url = `/fooddetails/${id}`
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
                    <Link to={url} className="btn btn-danger">Details</Link>
                </Card>
            </Col>
        </div>
    );
};

export default Food;