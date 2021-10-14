import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import TabBar from '../TabBar/TabBar';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data))
    }, [])
    return (
        <>
            <TabBar></TabBar>
            <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        breakfast.map(nasta => <Col>
                            <Card>
                                <Card.Img variant="top" src={nasta.img} />
                                <Card.Body>
                                    <Card.Title>{nasta.title}</Card.Title>
                                    <Card.Text>
                                        {nasta.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }

                    )
                </Row>

            </div>
        </>
    );
};

export default Breakfast;