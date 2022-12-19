import React,{useEffect} from 'react'
import Image from 'next/legacy/image'
import Link from "next/link";
import { useRouter } from 'next/router'
function showAnimation(){
    let classBtn = document.getElementById("class-btn");
    if(document.documentElement.scrollTop + window.innerHeight  >= classBtn.offsetTop){
      classBtn.classList.add("fade-animation")
    }
    window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight  >= classBtn.offsetTop){
      classBtn.classList.add("fade-animation")
    }
  })
}


const ClassList = () => {
  let router = useRouter();
  useEffect(() => {
    if(router.pathname==="/"){
      showAnimation()
    }
  }, [])
  return (
    <section id='classList'>
    <h2>Popular Classes</h2>
    <div className="class-container">
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/cardio.jpg`}  alt="doctor" />
        </div>
        <p>Cardio</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/lifting.jpg`}  alt="doctor" />
        </div>
        <p>Lifting</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/air-yoga.jpg`} alt="doctor" />
        </div>
        <p>Air Yoga</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/press-back.jpg`}  alt="doctor" />
        </div>
        <p>Press &amp; Back</p>
      </div>
      {router.pathname==="/classes" && <>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/callanetics.jpg`}  alt="doctor" />
        </div>
        <p>Callanetics</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/image.jpg`}  alt="doctor" />
        </div>
        <p>Cardio Boxing</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/body-building.jpg`}  alt="doctor" />
        </div>
        <p>Body Building</p>
      </div>
      <div className="class-box">
        <div className="class-image-box">
<Image   layout="fill" objectFit="cover" src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/sport-dances.jpg`}  alt="doctor" />
        </div>
        <p>Sport Dances</p>
      </div>
            </>}
    </div>
    <div className="btn-container">
    {router.pathname==="/" &&  <Link href="/classes" className="link">
    <button className='class-button'id='class-btn'>CHECK ALL CLASSES</button>
          </Link>}
    </div>
    </section>
  )
}

export default ClassList