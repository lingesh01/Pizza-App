import React from 'react';
import Hero from '../components/Hero/Hero';
import Featues from '../components/Features/Featues';
import Footer from '../components/Footer/Footer';
import PizzaProduct from '../components/PizzaProduct/PizzaProduct';
import DessertsProducts from '../components/DessertsProduct/DessertsProducts';

const Home = () => {
    return (
        <>
            <Hero />
            <PizzaProduct />
            <Featues />
            <DessertsProducts />
            <Footer />
        </>
    );
};

export default Home;
