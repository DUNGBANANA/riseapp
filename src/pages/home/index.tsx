import * as React from 'react';


import MainLayout from '../../components/Layout/MainLayout';
// import Services from '../../components/services/services';
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import Service from '../../components/Service'
import Ourwork from '../../components/Ourwork'
import Nocases from '../../components/Nocases'
import Testimonials from '../../components/Testimonials';
import Ourteam from '../../components/Ourteam';
import Digital from  '../../components/Digital'
import Awards from '../../components/Awards';

import './main.scss'
export interface IHomePageProps {
}

export default function HomePage (props: IHomePageProps) {
  return (
    <MainLayout>
      <Banner/>   
      <Service />
      <Ourwork/>
      <Nocases/>  
      <Testimonials/>
      <Ourteam/>
      <Digital/>
      <Awards/>
      <Contact/>
    </MainLayout>
  );
}
