import * as React from 'react';
import Contact from '../../components/Contact';
import MainLayout from '../../components/Layout/MainLayout';
import About from '../../components/About';

export interface IAboutUsProps {
}

export default function AboutUs (props: IAboutUsProps) {
  return (
    <MainLayout>
        <About/>
        <Contact/>
    </MainLayout>
  );
}
