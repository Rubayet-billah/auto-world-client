import React from 'react';
import Button from '../../../utilities/Button/Button';
import { HiOutlineStar } from 'react-icons/hi';

const CarCard = ({ car }) => {
    const { name, image, date, mileage, location, engine, transmission, price } = car;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl rounded">
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-zinc-400'>{date}</p>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <div className='bg-red-100 p-2 rounded text-xl text-red-400'>
                            <HiOutlineStar />
                        </div>
                    </div>
                    <img src={image} alt="Shoes" className="rounded" />
                    <div className='grid grid-cols-2'>
                        <p><span className='text-zinc-400'>Mileage:</span> {mileage}</p>
                        <p><span className='text-zinc-400'>Location:</span> {location}</p>
                        <p><span className='text-zinc-400'>Engine:</span> {engine}</p>
                        <p><span className='text-zinc-400'>Transmission:</span> {transmission}</p>
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