import React from 'react'
import NavBar from './Nav/NavBar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom';
export default function Layouts() {
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>


        </>
    )
}
