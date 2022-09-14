import React from 'react'
import Head from 'next/head'
const HeadComponent = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Bosh sahifa" />
      <link rel="icon" href="/favicon.ico" />
      <link ref="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
  )
}

export default HeadComponent
