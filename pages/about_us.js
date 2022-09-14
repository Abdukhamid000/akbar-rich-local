// import AboutUsPage from "@modules/AboutPage/sections/AboutUs/AboutUs";
import React from "react";
import dynamic from 'next/dynamic';
import { fetchQuery } from '../utils/index';

const AboutUsPage = dynamic(() => import('@modules/AboutPage/sections/AboutUs/AboutUs'));

const AboutUs = () => {

  return <AboutUsPage />;
};


// export async function getServerSideProps() {
//   const data = await fetchQuery('about-page')
//   return {
//     props: { data },
//   }
// }

export default AboutUs;
