import React from 'react';
import { useForm } from 'react-hook-form';

const AddCar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const imgHostKey = process.env.REACT_APP_imgbb_apikey;
    const handleAddCar = (data) => {
        const { name, mileage, location, engine, transmission, price } = data;
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                const carObj = {
                    name, image: data.data.url, mileage, location, engine, transmission, price
                }
                console.log(carObj)
            })
    }

    // . Car name
    // 2. Mileage 
    // 3. Location
    // 4. Engine
    // 5. Transmission
    // 6. Price

    return (
        <div>
            <h2 className='text-3xl text-center'>Add Car Here</h2>
            <form onSubmit={handleSubmit(handleAddCar)} className='max-w-lg mx-auto'>
                <input className='input input-sm input-bordered w-full my-2' {...register("name", { required: true })} placeholder='Car Name' />
                {errors.name && <p className='text-red-500'>This field is required</p>}
                <input className='file-input file-input-sm file-input-bordered w-full my-2' {...register("image", { required: true })} placeholder='Image' type='file' />
                {errors.mileage && <p className='text-red-500'>This field is required</p>}
                <input className='input input-sm input-bordered w-full my-2' {...register("mileage", { required: true })} placeholder='Mileage' />
                {errors.mileage && <p className='text-red-500'>This field is required</p>}
                <input className='input input-sm input-bordered w-full my-2' {...register("location", { required: true })} placeholder='Location' />
                {errors.location && <p className='text-red-500'>This field is required</p>}
                <input className='input input-sm input-bordered w-full my-2' {...register("engine", { required: true })} placeholder='Engine' />
                {errors.engine && <p className='text-red-500'>This field is required</p>}
                <input className='input input-sm input-bordered w-full my-2' {...register("transmission", { required: true })} placeholder='Transmission' />
                {errors.transmission && <p className='text-red-500'>This field is required</p>}
                <input className='input input-sm input-bordered w-full my-2' {...register("price", { required: true })} placeholder='Price' type='number' />
                {errors.price && <p className='text-red-500'>This field is required</p>}

                <input className='bg-red-400 hover:bg-red-600 ease-in-out duration-200 w-full my-3 text-white font-semibold px-8 py-1 rounded' type="submit" />
            </form>
        </div>
    );
};

export default AddCar;