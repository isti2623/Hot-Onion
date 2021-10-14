import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (

        <>
            <div className='banner-img'>
                <div className='container w-50'>
                    <div className='search-field'>
                        <div className=''>
                            <div>
                                <h1 className="text-center text-dark  mt-2 p-2">Best Food Waiting Fore Your Belly</h1>
                            </div>
                            <div>
                                <InputGroup className="my-3">
                                    <FormControl
                                        placeholder="search food item"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button variant="danger" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;