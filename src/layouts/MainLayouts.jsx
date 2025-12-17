import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;