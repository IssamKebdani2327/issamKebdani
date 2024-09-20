


import './navbar.css' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars , faXmark} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react';



function NavBar() {
    
    
    const [isOpen , setIsOpen] = useState(false) ;
    const menuRef = useRef() ;
    useEffect(() => {
        if(isOpen) {
            menuRef.current.style.right = "0"
        } else {
            menuRef.current.style.right = "-350px"
        }
    } ,[isOpen])
    return (    
        <div className="navBar" id='home'>
            <div className="logo">
                kbd
            </div>
            <ul ref={menuRef}>
                <span className="close" >
                    <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(!isOpen)} />
                </span>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">contact</a></li>
                <li><a href="#footer">footer</a></li>
            </ul>
            <a href="#contact">
                <button>
                    contact with me
                </button>
            </a>
            <span className="open" >
                <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
            </span>
            
        </div>
    ) ;
}


export default NavBar ;