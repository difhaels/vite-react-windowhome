import React from 'react'
import banner from '../assets/banner/banner.png';
import '../assets/css/banner.css';

export default function Banner() {
  return (
    <img src={banner} alt="Banner" className='banner'/>
  )
}
