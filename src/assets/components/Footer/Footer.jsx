import React from 'react'
import './Footer.css'
import Information from './Information'
import MyAccount from './MyAccount'
import StoreInfo from './StoreInfo'
export default function Footer() {
  return (
    <section className='footer-container'>
      <Information/>
      <MyAccount/>
      <StoreInfo/>
    </section>
  )
}
