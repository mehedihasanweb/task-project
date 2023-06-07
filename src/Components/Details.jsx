import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    const {summary} = loadedData
    
    return (
        <div className='my-5'>
            <h2>{summary}</h2>
            <Link to={`/movieForm/${loadedData.id}`} className='text-decoration-none'><button className='d-flex mx-auto p-2 mt-5 fs-3 fw-medium btn btn-outline-success'>Movie Booking</button></Link>
        </div>
    );
};

export default Details;