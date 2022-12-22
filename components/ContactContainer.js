import React,{useEffect} from 'react'
import Image from 'next/legacy/image'
function showAnimation(){
  let contactBtn = document.getElementById("contact-btn");
  let footer = document.getElementById("footer");
    if(document.documentElement.scrollTop + window.innerHeight  +100>= footer.offsetTop){
      contactBtn.classList.add("fade-animation")
    }
    window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight  +100>= footer.offsetTop){
      contactBtn.classList.add("fade-animation")
    }
  })
}
const ContactContainer = () => {
  useEffect(() => {
   showAnimation()
  }, [])
  return (
    <div id="contact">
           <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/contact.jpg`} alt="doctor" />
        <div className="form-container">
        <h2>Contact Us</h2>
            <input type="text" placeholder='Write Your Full Name' />
            <input type="email" placeholder='Write Your Email Address' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Write Your Message'/>
            <div className="btn-container">
    <button className='contact-button' id='contact-btn'>SEND MESSAGE</button>
    </div>
        </div>
    </div>
   
  )
}

export default ContactContainer