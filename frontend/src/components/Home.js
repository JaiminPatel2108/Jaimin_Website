import React from 'react'

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="part1 part">
          <h1>HI, I AM JAIMIN</h1>
          <h2>A MERN stack Developer & Design Enthusiast</h2>
          <a className='link cvbtn' href ="de report.pdf" attributes-list download ="de report" ><button type="button" className="btn cvbtn btn-outline-primary"><i class="fa-solid fa-circle-down"></i>  Download CV</button> </a>
        </div>
        <div className="part2 part">
          <img className='pic1' src="photo.png" alt="" />
        </div>
      </div>
    </>
  )
}
