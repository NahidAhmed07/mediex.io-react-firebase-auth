import React from 'react';
import OurDoctor from '../../OurDoctor/OurDoctor';
import Services from '../../Services/Services';
import Menubar from '../../Shared/Menubar/Menubar';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Pricing from '../Pricing/Pricing';
import Quote from '../Quote/Quote';

const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <Services></Services>
      <Quote></Quote>
      <OurDoctor></OurDoctor>
      <Gallery></Gallery>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;