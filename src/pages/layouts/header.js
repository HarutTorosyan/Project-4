import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/footer-logo.png';
import { Link } from 'react-scroll';
import "../../assets/js/script.js";
export default function Header() {
    const [openRight, setOpenRight] = React.useState(false);
    const [openTop, setOpenTop] = React.useState(false);
    return (
        <>
            <div className="w-full flex max-md:px-4 max-md:bg-[#0b1315] justify-between md:justify-between border-b-[1px] border-textGold fixed z-50 top-0" id='Navbar'>
                <div className='py-4 px-8'>
                    <img src={Logo} />
                </div>
                <div className='md:w-full flex items-center justify-center'>
                    <ul className='flex justify-center space-x-12 max-md:hidden'>
                        <li   className='Header__Links'>
                            <Link to={'Home'} spy={true} smooth={true} offset={0} duration={500}>home</Link>
                        </li>
                        <li className='Header__Links'><Link to={'About'} spy={true} smooth={true} offset={0} duration={500}>about</Link></li>
                        <li className='Header__Links'><Link to={'Kitchen'} spy={true} smooth={true} offset={0} duration={500}>
                        kitchen</Link></li>
                        <li  className='Header__Links'><Link to={'Menu'} spy={true} smooth={true} offset={0} duration={500} >menu</Link></li>
                        <li className='Header__Links'><Link to={'Team'} spy={true} smooth={true} offset={0} duration={500} >team</Link></li>
                        <li className='Header__Links'><Link to='Footer' spy={true} smooth={true} offset={0} duration={500} >contact</Link></li>
                    </ul>
                    <div className='group py-4 pr-8 cursor-pointer md:hidden' onClick={() => setOpenTop(!openTop)}>
                        <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-2 transition-all duration-300 relative group-hover:translate-x-3'></div>
                        <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-0 transition-all duration-300 relative group-hover:translate-x-5'></div>
                        <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-4 transition-all duration-300 relative group-hover:translate-x-0'></div>
                        <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-3 transition-all duration-300 relative group-hover:translate-x-1'></div>
                    </div>
                    <div className={
                        openTop
                            ? "w-full  bg-[#0f1d22] h-[200px]  transition-all duration-500 left-0 top-[99px] fixed overflow-hidden"
                            : "w-full h-0 translate-x-[0] bg-[#0f1d22] left-0 top-[99px] transition-all duration-500 fixed overflow-hidden"
                    }>
                        <ul className='flex flex-col py-4 px-8 space-y-4'>
                            <li className='Header__Links w-fit text-textGold'><Link to={'Home'} spy={true} smooth={true} offset={0} duration={500}  className='text-textGold'>home</Link></li>
                            <li className='Header__Links w-fit text-textGold'><Link to={'About'} spy={true} smooth={true} offset={0} duration={500}  className='text-textGold'>about</Link></li>
                            <li className='Header__Links w-fit text-textGold'><Link to="Kitchen" spy={true} smooth={true} offset={0} duration={500}  className='text-textGold'>kitchen</Link></li>
                            <li className='Header__Links w-fit text-textGold'><Link to="Menu" spy={true} smooth={true} offset={0} duration={500}  className='text-textGold'>menu</Link></li>
                            <li className='Header__Links w-fit text-textGold'><Link to={'Team'} className='text-textGold' spy={true} smooth={true} offset={0} duration={500} >team</Link></li>
                            <li className='Header__Links w-fit text-textGold'><Link className='text-textGold' spy={true} smooth={true} offset={0} duration={500} to={'Footer'} >contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='group py-4 pr-8 cursor-pointer max-md:hidden' onClick={() => setOpenRight(!openRight)}>
                    <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-2 transition-all duration-300 relative group-hover:translate-x-3'></div>
                    <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-0 transition-all duration-300 relative group-hover:translate-x-5'></div>
                    <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-4 transition-all duration-300 relative group-hover:translate-x-0'></div>
                    <div className='w-[30px] h-[1px] bg-textGold mt-2 translate-x-3 transition-all duration-300 relative group-hover:translate-x-1'></div>
                </div>
                <div className={
                    openRight
                        ? "w-[400px] z-50 translate-x-[0px] bg-[#0f1d22] h-[100vh]  transition-all duration-500 right-0 fixed overflow-hidden max-md:hidden"
                        : "w-[400px] h-[100vh] translate-x-[400px] bg-[#0f1d22] right-0 transition-all duration-500 fixed overflow-hidden"
                }>
                    <div className="w-[90%] h-[90%] mt-[15%] mx-auto overflow-hidden">
                        <div className='flex justify-end text-textGold text-[22px]'>
                            <button className='' onClick={() => setOpenRight(!openRight)}>X</button>
                        </div>
                        <div className='mt-12 flex justify-center'>
                            <img src={Logo} />
                        </div>
                        <div className='mt-12'>
                            <ul className='text-white text-[19px] font-josefin text-center flex flex-col space-y-4'>
                                <li>Laurent Fine dining,</li>
                                <li><a href=''>107 Duncan Avenue, New York</a></li>
                                <li><a href=''>914-309-7030,</a></li>
                                <li>Open: 09:00 am – 01:00 pm</li>

                            </ul>
                        </div>
                        <div className='mt-12'>
                            <ul className='text-white text-[19px] font-josefin text-center flex flex-col space-y-4'>
                                <li><a href='' className='Header__Links'> Facebook</a></li>
                                <li><a href='' className='Header__Links'> Instagram</a></li>
                                <li><a href='' className='Header__Links'> Trip Advisor</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}