import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="index.html" className="logo">Training<em> Studio</em></a>
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                    <li className="scroll-to-section"><a href="#features">About</a></li>
                                    <li className="scroll-to-section"><a href="#our-classNamees">classNamees</a></li>
                                    <li className="scroll-to-section"><a href="#schedule">Schedules</a></li>
                                    <li className="scroll-to-section"><a href="#contact-us">Contact</a></li> 
                                    <li className="main-button"><a href="#">Sign Up</a></li>
                                </ul>        
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
