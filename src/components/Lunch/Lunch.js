import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const Lunch = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setLunch(data))
    }, [])
    return (

        <>

            <div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        lunch.map(nasta => <Col>
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

export default Lunch;