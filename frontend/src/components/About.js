import axios from 'axios'
import React, { useEffect } from 'react'

export default function About() {

  const gettingData = async(e)=>{
    e.preventDefault()
    console.log("getting the data button");
    const {data} = await axios.get("https://jaiminpatelstudent-default-rtdb.firebaseio.com/")
    console.log(data);
  }
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutPart1"><img className='aboutimg' src="https://react-tailwindcss-portfolio.netlify.app/static/media/profile.bbe2eb2e.jpeg" alt="" /></div>
        <div className="aboutPart2">
          <p style={{color:"white", marginTop:"70px", marginRight:"50px", fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum adipisci nostrum vero itaque modi eaque dolor vitae omnis consectetur nesciunt doloremque sequi iste exercitationem neque reiciendis illo deleniti laborum, beatae sapiente iure quod corporis alias porro? Nihil laborum dolore quia quae, culpa, officia molestiae deleniti et, numquam blanditiis quo.</p>
          <p style={{color:"white", marginRight:"50px", fontSize:"20px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse enim laborum eum libero eligendi excepturi id quaerat ab perspiciatis ullam, voluptas cum asperiores voluptatum ipsum.</p>
        </div>
        <button onClick={gettingData}>get</button>
      </div>
    </>
  )
}
