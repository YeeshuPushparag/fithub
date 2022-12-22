import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, {useState, useEffect} from "react";

const Navbar = ({useWindowSize}) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const size = useWindowSize()
  let router = useRouter()
  useEffect(() => {
    if(window.innerWidth>912){
        document.getElementById("ham").style.display = "none"
        document.getElementById("cross").style.display = "none"
        document.getElementById("nav").style.height = "75px"
    }
    else{
        document.getElementById("ham").style.display = "flex"
        setToggleMenu(false)
    }
  },[size])
 useEffect(() => {
   if(toggleMenu && window.innerWidth<=912){
    document.getElementById("ham").style.display = "none"
    document.getElementById("cross").style.display = "flex"
    document.getElementById("nav").style.height = "336px"
   } 
   else if(!toggleMenu && window.innerWidth<=912){
    document.getElementById("ham").style.display = "flex"
    document.getElementById("cross").style.display = "none"
    document.getElementById("nav").style.height = "75px"
   }
 }, [toggleMenu])
 useEffect(() => {
  setToggleMenu(false)
 }, [router.pathname])
  return (
    <nav className="navbar" id="nav">
      <div className="logo">
        <Link href="/" className="link">
          <h1 className="logo-heading" id="fithub">Fithub</h1>
        </Link>
      </div>
      <ul className="navlink">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/classes" className="link">
            Classes
          </Link>
        </li>
        <li>
          <Link href="/personal-trainers" className="link">
            Personal Trainers
          </Link>
        </li>
        <li>
          <Link href="/prices-plans" className="link">
           Prices &amp; Plans
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="cta">
        <button className="cta-button" id="join-now">Join Now</button>
      </div>
     

    
        <div id="ham" onClick={()=>{setToggleMenu(true)}}>
        <Image
          layout="fill"
          objectFit="contain"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/menu-icon.png`}
          alt="menu"
        />
      </div>
      <div id="cross" onClick={()=>{setToggleMenu(false)}}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/close-icon.png`}
            alt="close"
          />
        </div>
    </nav>
    )
};

export default Navbar;
