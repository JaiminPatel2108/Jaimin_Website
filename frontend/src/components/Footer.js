import React from 'react'

export default function Footer() {
  return (
    <>
     <hr className='footerline' />

     <p style={{color : 'white', fontSize: '35px', textAlign:"center"}}>Follow Me</p>
     <div className="footercontainer">
        <div className="icon"><a href='https://www.instagram.com/jaimin_031/' target='_blank'><i className="fa-brands fa-instagram pic" style={{fontSize:"50px"}}></i></a></div>
        <div className="icon"><a href='https://github.com/JaiminPatel2108/' target='_blank'><i className="fa-brands fa-github pic" style={{fontSize:"50px"}}></i></a></div>
        <div className="icon"><a href='https://www.youtube.com/@PalasMayur' target='_blank'><i className="fa-brands fa-youtube pic" style={{fontSize:"50px"}}></i></a></div>
        <div className="icon"><a href='https://www.linkedin.com/in/jaimin-patel-613056206/' target='_blank'><i className="fa-brands fa-linkedin pic" style={{fontSize:"50px"}}></i></a></div>
     </div>
     <br/>
     <br/>
     <p style={{color:"white",textAlign:"center", fontSize:"20px"}}>© 2023React & MERN Stack Development Portfolio.JAIMIN</p>
    </>
  )
}
