import React from 'react';
import CarCard from './CarCard';

const CarsContainer = () => {
    const cars = [
        { name: 'Marcidez Benz', price: 20000 },
        { name: 'Toyota', price: 20000 },
        { name: 'Lamborgini', price: 20000 },
        { name: 'Marcidez Benz', price: 20000 },
    ]
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
                    cars?.map((car, idx) => <CarCard
                        key={idx}
                        car={car}
                    />)
                }
            </div>
        </div>
    );
};

export default CarsContainer;