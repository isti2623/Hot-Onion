import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <Container className="main-container">

                <h2 className="fw-bold fs-1 text-center my-5">Page Not Found . 404!</h2>
                <Link to="/home">
                    <Button className="btn-custom mb-5" variant="success">Back To Home Page</Button>
                </Link>

            </Container>

        </div>
    );
};

export default NotFound;