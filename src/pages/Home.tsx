import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/Home.scss';
import '../styles/global.scss';
import CarouselHome from '../components/Home/Carousell-Home';




export default function Home() {
  return (
    <div>
        <Navbar/> 
        
      <div className='conteudo-home'>
      <CarouselHome/>
      </div>
      
      <Footer/>
    </div>
  );
}


