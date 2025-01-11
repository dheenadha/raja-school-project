import React, { PureComponent } from 'react'
import "./firsttopbor.css"
import { ImLocation } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
export default class Firsttopbar extends PureComponent {
  render() {
    return (
      <>
      <div className="GeeksForGeeks">
      <div class="navbar navbar-expand-lg   " >
      
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">  <ImLocation className='text-warning fs-4'/>
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
    
        <div class="nav-item">
        
        <div class="nav-link active p-4" >
            
                <div className="textbox">Raja driving school,</div>
        <div className="textbox">
        Bypass road, 4Road, Palacode,
        </div>
        <div className="textbox">
           Chikkardanahalli, Tamil Nadu 636808
           </div>
        </div>
        </div>
      
        <div class="nav-item" >
          <div class="nav-link active p-5" > <div className="textbox p-1"><FaRegClock className='text-warning fs-4' /> 24X7</div></div>

        </div>
       
      </div>
      <form class="d-flex">
  
        <ul class="d-flex align-items-end flex-column mb-3">
        <div class="mb-auto p-2"> <FaPhone className='text-warning'/> +91 94436 14899</div>
        <div class="p-2"><FaPhone className='text-warning'/> +91 96550 47770</div>
        <div class="p-2"><FaPhone className='text-warning'/> +91 95976 58007</div>
       </ul>
      </form>
    </div>
  </div></div>
  </div>
      </>
    )
  }
}
