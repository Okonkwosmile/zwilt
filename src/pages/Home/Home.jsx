import React from 'react';
import Header from '../../components/Header';
import Hero from './components/Hero';
import Services from '../../components/Services';
import demarcation from "../../assets/images/line-demarcation.png"
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import three from "../../assets/images/three.png"
import Marketplace from '../../components/sections/Marketplace';
import Testimonials from '../../components/sections/Testimonials';
import ScreeningProcess from '../../components/sections/ScreeningProcess';
import Journey from '../../components/sections/Journey';
import Journey2 from '../../components/sections/Journey2';
import Footer from '../../components/Footer';
import WhyChooseUs from '../../components/WhyChooseUs';

const Home = () => {
  return (
    <div className='my-7 overflow-x-hidden'>

      <div className='px-10'>
        <Header/>
      </div>
      <Hero/>
      <Services/>

      <img className='mt-20' src={demarcation} alt="" />

      <Marketplace/>
      <Testimonials/>
      <ScreeningProcess/>
      <Journey2/>
      <br />
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
};

export default Home;
