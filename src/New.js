import React from 'react';
import img1 from './img/img1.png';

const New=()=>{
    
    return(
    <>
    <div className='background'>
       <div className='design'>
          <h3>DESIGN</h3>
          <p>AGENCY</p>
       </div>
       <div>
            <nav className='navlink'>
                <div className='nav-link'>
                <a href='#' target="_blank">specialize in</a>
                </div>
                <div className='nav-link'>
                <a href='#' target="_blank">Case Study</a>
                </div >
                <div className='nav-link'>
                <a href='#' target="_blank">Process</a>
                </div>
                <div className='nav-link'>
                <a href='#' target="_blank">Industries</a>
                </div>
            </nav>
       </div>
       <div className='nav-btn btn-1'>
           <button className='btn1'>Schedule A Call</button>
       </div>
       <div className='nav-btn btn2'>
          <button>We are Hiring</button>
       </div>
       <div className='main-content'></div>
        <div className='content'>
       
            <h1>INNOVATION DIGITAL TECHNOLOGY</h1>
            <h5>everything we do is the consumer,imagination and you</h5>
        </div>
       
    </div>
    </>
    )
}
export default New;