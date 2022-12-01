import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CarCard from './CarCard';

const CarsContainer = () => {

    const { data: cars } = useQuery({
        queryKey: ['cars'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/cars');
            const data = await res.json();
            return data;
        }
    })

    // const cars = [
    //     { name: 'Marcidez Benz', price: 20000 },
    //     { name: 'Toyota', price: 20000 },
    //     { name: 'Lamborgini', price: 20000 },
    //     { name: 'Marcidez Benz', price: 20000 },
    // ]
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
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