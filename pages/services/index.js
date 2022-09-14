import React from 'react';

import ServiceHeader from '../../src/components/PageHeader/index'
import ServiceMain from '../../src/components/MainSection/main_section'

import cls from './Services.module.css';

const Services = () => {
  return (
    <section className={cls.section}>
      <ServiceHeader />
      <ServiceMain />
    </section>
  )
}

export default Services
