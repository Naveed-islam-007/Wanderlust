import Image from 'next/image';
import React from 'react';

const DestinationDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const destination = await res.json()

    const { imageUrl, price, destinationName, country, duration } = destination

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            {/* Image */}
            <Image
                src={imageUrl}
                alt={destinationName}
                className="w-full h-72 object-cover rounded-2xl shadow-md"
                width={400} height={300}
            />

            {/* Info Card */}
            <div className="mt-6 bg-white rounded-2xl shadow p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">{destinationName}</h1>
                    <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                        {country}
                    </span>
                </div>

                <div className="flex gap-6 text-gray-600 text-sm">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Duration</p>
                        <p className="font-semibold text-gray-700">{duration}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Price</p>
                        <p className="font-semibold text-green-600 text-lg">${price}</p>
                    </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default DestinationDetails;