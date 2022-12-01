import React from 'react';
import { Link } from 'react-router-dom';
import CarsContainer from '../CarsContainer/CarsContainer';
import { RiFileInfoLine } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDollarCircle, AiOutlineSetting } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { HiOutlineWrench } from 'react-icons/hi2'
import { IoColorPalette } from 'react-icons/io5'

const Home = () => {


    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="car-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-6">

                    <CarsContainer></CarsContainer>
                    {/* <label htmlFor="car-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side font-semibold">
                    <label htmlFor="car-drawer" className="drawer-overlay"></label>
                    <ul className="menu w-80 bg-base-100 text-base-content">

                        <li className='border border-gray-300'><Link to=''><RiFileInfoLine />Basic Information<AiOutlinePlus className='ml-auto' /></Link></li>
                        <li className='border border-gray-300'><Link to='' className='block'><p className='flex items-center mb-2'><AiOutlineDollarCircle className='mr-2' />Car cost<AiOutlineMinus className='ml-auto' /></p>
                            <section>
                                <div className='flex justify-between'>
                                    <div className='px-5 py-2 bg-gray-100 rounded'>
                                        <p className='text-gray-400'>Price from:</p>
                                        <p className=''>$21 000</p>
                                    </div>
                                    <div className='px-5 py-2 bg-gray-100 rounded'>
                                        <p className='text-gray-400'>Price up to:</p>
                                        <p className=''>$34 000</p>
                                    </div>
                                </div>
                                <div className='w-fit'>
                                    <div className="form-control">
                                        <label className="label cursor-pointer w-full bg-gray-100 rounded  mb-2 mt-4 px-3 justify-start">
                                            <input type="checkbox" className="checkbox" />
                                            <span className="label-text ml-2">Possible Bargenning</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer w-full bg-gray-100 rounded  my-2 px-3 justify-start">
                                            <input type="checkbox" className="checkbox" />
                                            <span className="label-text ml-2">Exchange for real state</span>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer w-full bg-gray-100 rounded  my-2 px-3 justify-start">
                                            <input type="checkbox" className="checkbox" />
                                            <span className="label-text ml-2">Car exchange</span>
                                        </label>
                                    </div>
                                </div>
                            </section>
                        </Link></li>
                        <li className='border border-gray-300'><Link to=''><AiOutlineDollarCircle />Basic Information<AiOutlinePlus className='ml-auto' /></Link></li>
                        <li className='border border-gray-300'><Link to=''><GrLocation />Search region<AiOutlinePlus className='ml-auto' /></Link></li>
                        <li className='border border-gray-300'><Link to=''><HiOutlineWrench />Vehicle condition<AiOutlinePlus className='ml-auto' /></Link></li>
                        <li className='border border-gray-300'><Link to=''><AiOutlineSetting />Add configure<AiOutlinePlus className='ml-auto' /></Link></li>
                        <li className='border border-gray-300'><Link to=''><IoColorPalette />Color<AiOutlinePlus className='ml-auto' /></Link></li>
                    </ul>

                </div>
            </div>

        </div >
    );
};

export default Home;