import React from 'react';
import { Link } from 'react-router-dom';

const SingleCard = ({ data }) => {
    console.log(data.show);
    const {show  } = data
    return (
        <div className="col">
            <div className="card h-100">
                <img src={show?.image?.original} className="card-img-top h-100 p-2 rounded" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.show.name}</h5>
                    <p className="card-text">Runtime: {data.show.runtime}</p>
                    <p className="card-text">Status: {data.show.status}</p>
                </div>
                <Link to={`details/${show.id}`}><button className='w-50 mb-2 ms-2 btn btn-outline-success'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleCard;