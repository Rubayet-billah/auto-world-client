import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const MainLayout = () => {
    return (
        <div className='container mx-auto min-h-screen'>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster
                position="top-center"
            />
        </div>
    );
};

export default MainLayout;