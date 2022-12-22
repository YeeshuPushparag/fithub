import React,{useEffect} from 'react'
import Image from 'next/legacy/image'
function showAnimation(){
  let aboutBtn = document.getElementById("about-btn");
    if(document.documentElement.scrollTop + window.innerHeight  >= aboutBtn.offsetTop){
      aboutBtn.classList.add("fade-animation")
    }
    window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight  >= aboutBtn.offsetTop){
      aboutBtn.classList.add("fade-animation")
    }
  })
}
const About = () => {
  useEffect(() => {
   showAnimation()
  }, [])
  
  return (
    <section className='about'>
        <div className="about-first-half">
        <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/about-first-half.jpg`} alt="doctor" />
        </div>
        <div className="about-second-half">
<h2>About Fithub</h2>
<p>We&apos;re not here to carry you to fitness, we&apos;re here to motivate you to carry yourself to your goals. </p>
<p>If you&apos;re not sure what your goals are, or don&apos;t know where to start on your fitness journey, come in and speak to one of our qualified trainers who can help you develop a plan.</p>
<div className="btn-container">
    <button className='about-button' id='about-btn'>SCHEDULE</button>
    </div>
        </div>
    </section>
  )
}

export default About