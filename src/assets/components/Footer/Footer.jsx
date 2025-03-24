import React from 'react'
import './Footer.css'
import Owners from './Owners'
import MyAccount from './MyAccount'
import StoreInfo from './StoreInfo'
export default function Footer() {
  return (
    <section className='footer-container'>
      <Owners/>
      <MyAccount/>
      <StoreInfo/>
    </section>
  )
}
