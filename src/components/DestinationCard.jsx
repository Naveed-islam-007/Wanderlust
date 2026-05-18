import Image from 'next/image';
import React from 'react';

const DestinationCard = ({destination}) => {
    const {imageUrl, price, destinationName, country, duration}=destination;
    return (
       <div className='w-full border rounded-2xl overflow-hidden'>
            <Image src={imageUrl} alt={destinationName} width={400} height={200} className='w-full h-48 object-cover'/>
            <div className='p-4 space-y-2'>
                <h2 className='text-lg font-bold'>{destinationName}</h2>
                <span className='text-gray-500'>{country}</span>
                <div className='flex justify-between'>
                    <span className='font-semibold'>${price}</span>
                    <span className='text-gray-500'>{duration}</span>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;