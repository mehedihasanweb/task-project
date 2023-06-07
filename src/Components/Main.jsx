import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const Main = () => {
    const [totalData, setTotalData] = useState([])

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setTotalData(data))
    }, [])
    return (
        <div className='my-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    totalData.map(data => <SingleCard key={data.show.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Main;