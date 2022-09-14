// import Layout from "components/Layout/Layout";
import HomePage from '@modules/Home/Home'
import dynamic from "next/dynamic";
import { fetchQuery } from '../utils';

export default function Home() {
  return <HomePage />
}

// export async function getServerSideProps() {
//   const homeData = await fetchQuery('home-page');
//   const products = await fetchQuery('products')
//   const turnkeys = await fetchQuery('turnkeys')
//   return {
//     props: {
//       products,
//       turnkeys,
//       data: homeData
//     }
//   }
// }
