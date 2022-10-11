import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const DataContext = createContext([])
const Root = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <DataContext.Provider value={data}>
            <Header />
            <Outlet />
            <Footer />
       </DataContext.Provider>
    );
};

export default Root;