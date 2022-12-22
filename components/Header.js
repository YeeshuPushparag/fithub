import Image from 'next/legacy/image'
import React from 'react'
import { useEffect ,useRef} from 'react';
function showAnimation(){
  let ctaBtn = document.getElementById("cta-btn");
  let classList = document.getElementById("classList");
    if(document.documentElement.scrollTop + window.innerHeight  +100>= classList.offsetTop){
      ctaBtn.classList.add("fade-animation")
    }
    window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight  +100>= classList.offsetTop){
      ctaBtn.classList.add("fade-animation")
    }
  })
}
const Header = () => {
  const dataFetchedRef = useRef(false);
  function showTextAnimation(){
    let typedTextSpan = document.querySelector(".typed-text");
    let cursorSpan = document.querySelector(".cursor");
    let textArray = ["WELCOME TO FITHUB!", "START FOR FREE!", "JOIN NOW!", "GET A FREE CLASS!"];
    let typingDelay = 100;
    let erasingDelay = 100;
    let newTextDelay = 100; 
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay + 900);
      }
    }
    
    function erase() {
      if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay );
      } 
      else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 250);
      }
    }
    
    if(textArray.length) setTimeout(type, newTextDelay + 250);
  }
 
    useEffect(() => {
      if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
   showTextAnimation()
   showAnimation()
    }, [])
  return (
    <>
    <div id='header'> <Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/image.jpg`} alt="doctor" />
    <div className="header-container">
        <h2 id='welcome'><span className="typed-text"></span><span className="cursor">&nbsp;</span></h2>
        <div className="btn-container">
        <button className="cta-button" id='cta-btn'>START FOR FREE</button>
         </div>
    </div>
    </div>
    </>
  )
}

export default Header