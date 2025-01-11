import React,{useRef, useEffect} from "react";
import { Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import "./header.css";
import logo from './assets/logo.jpg'
import lb from './assets/lboard.png'
import { FaCar } from "react-icons/fa";

const nav__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
];

const Header = () => {

const headerRef = useRef(null)

const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')
        }
    })
}



useEffect(()=>{
   stickyHeaderFunc()
   
   return window.removeEventListener('scroll', stickyHeaderFunc)
})

    return (
       <>
        <header className="header " ref={headerRef} >
            <div className="header " >
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between ">
                        {/* ============== logo ============== */}
                        <div className="logo  d-flex align-items-center justify-content-between">
                        <img src={logo} alt="" /><FaCar className="text-warning fs-1" /> <div className="h1 p-4">Raja Driving School </div>
                        <img src={lb} alt="" />
                        </div>
                        {/* ============== logo end ============== */}
                        
                        {/* ==============menu start============== */}
                        <div class="d-flex justify-content-end">
                            <ul className="menu d-flex align-items-center gap-4 p-4">
                                {nav__links.map((item, index) => (
                                    <div className="nav__item " key={index}>
                                        <NavLink to={item.path} className={navClass=> navClass.isActive ? "active__link" : ""   
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                        
                                    </div>
                                    
                                ))}
                                 <div className="nav__right  p-1">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                
                                    
                            </div>
                            <span className="mobile__menu">
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                            </ul>
                           
                        </div>
                        {/* ==============menu end============== */}
                        
                        {/* ==============nav buttons============== */}
                        
                        {/* ==============nav buttons end============== */}
                    </div>
                </Row>
            </div>
        </header></>
    );
};

export default Header;
