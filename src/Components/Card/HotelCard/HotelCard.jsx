import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HotelCard = ({hotel}) => {
    const {id, name, place_id , image, rating , price ,facilities  } = hotel ;

    // Generate array of stars based on rating
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className='text-warning' />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key={stars.length} className='text-warning' />);
    }

    return (
        <div className='grid md:grid-cols-2 shadow-2xl rounded-lg bg-gray-800 gap-4 mb-5'>
            <img className='rounded-lg' src={image} alt="" />
            <div className="text">
                <h6 className=' font-bold text-xl'>{name}</h6>
                <p className='my-3'>
                    {facilities.map((facility, index) => (
                        <span key={index}>{facility}{index !== facilities.length - 1 && ', '}</span>
                    ))}
                </p>
                <p>Wif Air conditioning Kitchen</p>
                <div className='flex justify-between mt-4'>
                    <div className='flex'>({rating}){stars}</div>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
}; 

export default HotelCard;
