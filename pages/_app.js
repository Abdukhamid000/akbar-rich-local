// import Layout from '@components/Layout/Layout'
import React, { useEffect } from 'react'
import '@styles/globals.css'
import '@styles/globals.css'
import Layout from '@components/Layout/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './_i18n';
import 'mapbox-gl/dist/mapbox-gl.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
