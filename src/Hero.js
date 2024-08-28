import React from 'react';
import ProductCard from './ProductCard';
import Nike21 from './images/Nike21.png';


function Hero() {
  return (
    <>
    <section className='hero'>
        <span className='hero-title'>Design & High Quality</span>
        <p className='hero-description'>
            like a have some many shoe 
            in my book here in ghana
        </p>
        <div className="hero-btn">
            <button className='btn btn-primary'>Buy Now</button>
            <button className='btn btn-secondary'>Sell Now</button>
        </div>

        <div className='hero-img-con'>
            <div className='hero-img'>
                <img src={Nike21} alt="shoe.img"/>
            </div>
        </div>


    </section>
    <div className='brands-logos'>
           <span> Brand Logos .</span>
           <span> Brand Logos .</span>
           <span> Brand Logos .</span>
           <span> Brand Logos .</span>
           <span> Brand Logos .</span>
        </div>

    </>
  )
}

export default Hero