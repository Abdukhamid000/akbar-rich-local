import React from 'react'
import classes from './ourpartners.module.css'
import partnersLogo from '@assets/images/Murad Buildings.svg'
import Image from 'next/image'
const Logo = () => {
  const logos = [
    { id: 1, logo: partnersLogo },
    { id: 2, logo: partnersLogo },
    { id: 3, logo: partnersLogo },
    { id: 4, logo: partnersLogo },
    { id: 5, logo: partnersLogo },
    { id: 6, logo: partnersLogo },
    { id: 7, logo: partnersLogo },
    { id: 8, logo: partnersLogo },
  ]
  return (
    <div>
      <div className={`${classes.logosWrapper} `}>
        {logos.map((logo) => (
          <div className={classes.logo} key={logo.id}>
            <Image src={logo.logo} alt="logo img" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Logo
