import React from 'react';
import Button from '../../../utilities/Button/Button';
import { HiOutlineStar } from 'react-icons/hi';

const CarCard = ({ car }) => {
    const { name, price } = car;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl rounded">
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <div>
                            <p>Date</p>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <div className='bg-red-100 p-2 rounded text-xl text-red-400'>
                            <HiOutlineStar />
                        </div>
                    </div>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded" />
                    <div className='grid grid-cols-2'>
                        <p>Milage:</p>
                        <p>Location:</p>
                        <p>Engine:</p>
                        <p>Transmission:</p>
                    </div>
                    <div className="flex items-center">
                        <p className='text-2xl font-semibold'>${price}</p>
                        <Button text='More Details' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;