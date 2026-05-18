import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const Destination = async() => {
    const res=await fetch(`http://localhost:5000/destination`)
    const destinations=await res.json()
    console.log(destinations)
    return (
        <div>
            <h1 className='text-xl font-bold'>All destinations</h1>
            <div className='grid grid-cols-3 gap-2 container mx-auto'>
                {
                    destinations.map(destination=> <div key={destination._id}>
                        <DestinationCard destination={destination}></DestinationCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Destination;