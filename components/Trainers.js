import React from 'react'
import Image from 'next/legacy/image'

const Trainers = () => {
  return (
    <section id='personal-trainers'>
    <h2>Personal Trainers</h2>
    <div className='about'>
   <div className="about-first-half">
   <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/trainer1.jpg`} alt="doctor" />
   </div>
   <div className="about-second-half">
<h2>Wells Chan</h2>
<p>We&apos;re not here to carry you to fitness, we&apos;re here to motivate you to carry yourself to your goals. </p>
<p>If you&apos;re not sure what your goals are, or don&apos;t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.</p>
<div className="btn-container">
<button className='about-button' id='t1-btn'>SCHEDULE WORKOUT</button>
</div>
   </div>
</div>
    <div className='about' id='colum-reverse'>

   <div className="about-second-half">
<h2>Julia Rekamie</h2>
<p>We&apos;re not here to carry you to fitness, we&apos;re here to motivate you to carry yourself to your goals. </p>
<p>If you&apos;re not sure what your goals are, or don&apos;t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.</p>
<div className="btn-container">
<button className='about-button' id='t2-btn'>SCHEDULE WORKOUT</button>
</div>
   </div>
   <div className="about-first-half">
   <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/trainer3.jpg`} alt="doctor" />
   </div>
</div>
    <div className='about'>
   <div className="about-first-half">
   <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/trainer2.jpg`} alt="doctor" />
   </div>
   <div className="about-second-half">
<h2>Gordan Cowie</h2>
<p>We&apos;re not here to carry you to fitness, we&apos;re here to motivate you to carry yourself to your goals. </p>
<p>If you&apos;re not sure what your goals are, or don&apos;t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.</p>
<div className="btn-container">
<button className='about-button' id='t3-btn'>SCHEDULE WORKOUT</button>
</div>
   </div>
</div>
  </section>
  )
}

export default Trainers
