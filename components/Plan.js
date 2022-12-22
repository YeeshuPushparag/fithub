import React,{useEffect} from 'react'
function showAnimation(){
  let pPlan = document.getElementById("p-btn");
  let bPlan = document.getElementById("b-btn");
  let sPlan = document.getElementById("s-btn");
    if(document.documentElement.scrollTop + window.innerHeight  >= bPlan.offsetTop){
      bPlan.classList.add("fade-plan-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight  >= sPlan.offsetTop){
      sPlan.classList.add("fade-plan-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight  >= pPlan.offsetTop){
      pPlan.classList.add("fade-plan-animation")
    }
    window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop + window.innerHeight  >= bPlan.offsetTop){
      bPlan.classList.add("fade-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight  >= sPlan.offsetTop){
      sPlan.classList.add("fade-animation")
    }
    if(document.documentElement.scrollTop + window.innerHeight  >= pPlan.offsetTop){
      pPlan.classList.add("fade-animation")
    }
  })
}
const Plan = () => {
  useEffect(() => {
   showAnimation()
  }, [])
  return (
    <section id="plan">
        <h2>Prices &amp; Plans</h2>
        <div className="plan-container">
            <div className="plan-list">
                <div className="plan-heading">
                <h3>Basic</h3>
                <p className='plan-price'>$30</p>
                </div>
                <ul className="plan-offers">
                <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                </ul>
                <div className="btn-container">
    <button className='plan-button' id='b-btn'>CHOOSE PLAN</button>
    </div>
            </div>
            <div className="plan-list">
                <div className="plan-heading">
                <h3>Standard</h3>
                <p className='plan-price'>$50</p>
                </div>
                <ul className="plan-offers">
                <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                </ul>
                <div className="btn-container">
    <button className='plan-button' id='s-btn'>CHOOSE PLAN</button>
    </div>
            </div>
            <div className="plan-list">
                <div className="plan-heading">
                <h3>Premium</h3>
                <p className='plan-price'>$100</p>
                </div>
                <ul className="plan-offers">
                    <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                </ul>
        <div className="btn-container">
    <button className='plan-button' id='p-btn'>CHOOSE PLAN</button>
    </div>
            </div>
        </div>
    </section>
  )
}

export default Plan