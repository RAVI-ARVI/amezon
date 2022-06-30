import React from 'react';
import './Home.css'
import Product from './Product'; 

function Home() {
  return (
    <div className='home'>
      <img className='home_logo' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home baner" />

       {/* product id title price rating image */}
       <div className="home_row">
       <Product id={1234} title={'Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life,..'} price={7} rating={5} image='https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL320_.jpg' />
       
       <Product id={1235} title={'Amazon Brand - Eono PC Gaming Headphones Surround Sound with Boom mic, Stereo Sound Wired Over Ear...'} price={12} rating={4} image='https://m.media-amazon.com/images/I/61-kuF3d6LL._AC_UL320_.jpg' />

         </div>
         <div className="home_row">
         <Product id={1234} title={'Fire TV Stick 4K with all-new Alexa Voice Remote (includes TV and app controls), Dolby Vision'} price={123} rating={3} image='https://m.media-amazon.com/images/I/41OWnJPd45L._AC_UL320_.jpg' />
         <Product id={1234} title={'Oxcia Smart Watch ID-116-13-2022 with Fitness & Activity'} price={6} rating={5} image='https://m.media-amazon.com/images/I/41aF4aW5FTL._AC_UL320_.jpg' />
         <Product id={1234} title={'Vincent Chase By Lenskart | Full Rim Wayfarer Branded Latest and Stylish Sunglasses |'} price={123} rating={4} image='https://m.media-amazon.com/images/I/41DjZNun3nL._AC_UL320_.jpg' />

         </div>
         <div className="home_row">
         <Product id={1234} title={'Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black) (2022 Model) | with Alexa Co '} price={123} rating={5} image='https://m.media-amazon.com/images/I/71jv5i4cRKS._AC_UY218_.jpg' />

         </div>
        {/* product */}
     

    </div>
  )
}

export default Home
