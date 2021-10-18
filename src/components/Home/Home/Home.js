import React from 'react';
import OurDoctor from '../../OurDoctor/OurDoctor';
import Services from '../../Services/Services';
import Menubar from '../../Shared/Menubar/Menubar';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Quote from '../Quote/Quote';

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Hero></Hero>
      <Services></Services>
      <Quote></Quote>
      <OurDoctor></OurDoctor>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;