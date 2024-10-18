import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import Signup from './usersetup/signup';
import Login from './usersetup/login';
import About from './about/About';
import Products from './products/Products';
import Pricing from './pricing/Pricing';
import Support from './support/Support';
import NotFound from './shared/NotFound';
import Footer from './shared/Footer';
import NavBar from './shared/NavBar';
import 'react-toastify/dist/ReactToastify.css';


export default function AppSections() {

    return (
        <BrowserRouter>
            <NavBar />
            <div className='col-12 col-md-11 col-lg-10 mx-auto px-4 px-md-0'>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}