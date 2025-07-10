'use client';
import React,{useState} from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = async () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className='flex justify-between items-center font-lato p-4 bg-black text-gray-300'>
                <div className="nav-logo min-[1200px]:hidden">
                    <div className="img-align cursor-pointer " onClick={toggleMenu}>
                        <img src="./align-justify.png" style={{ minWidth: 30 }} alt="alignment" />
                    </div>
                    {isOpen && <div className="mb-nav">


                        <ul className='flex absolute left-0 top-[114px] w-full flex-col justify-center items-start  text-gray-300'>
                            <li className='list-none bg-[#1d2023] p-5 w-full hover:bg-gray-500 ' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Home</a></li>
                            <li className='list-none bg-[#1d2023] p-5 w-full hover:bg-gray-500' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Service</a></li>
                            <li className='list-none bg-[#1d2023] p-5 w-full hover:bg-gray-500' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="/About">About me</a></li>
                            <li className='list-none bg-[#1d2023] p-5 w-full hover:bg-gray-500' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Portfolio</a></li>
                            <li className='list-none bg-[#1d2023] p-5 w-full hover:bg-gray-500' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Contact Me</a></li>
                        </ul>
                    </div> }
                    
                </div>
                <div className="log  text-xl p-8 flex justify-center" ><img src="./LOGO.png" style={{ minWidth: 40 }} alt="" /></div>
                <div className="nav-list max-[1200px]:hidden">
                    <ul className='flex justify-center items-center gap-30  text-gray'>
                        <li className='list-none ' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Home</a></li>
                        <li className='list-none ' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Service</a></li>
                        <li className='list-none' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="/About/">About me</a></li>
                        <li className='list-none' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Portfolio</a></li>
                        <li className='list-none' ><a className='no-underline hover:text-[#E46400] transition  duration-200' href="£">Contact Me</a></li>
                    </ul>
                </div>
                <div className="nav-btn bg-[#FD6F00] max-[500px]:m-0 max-[400px]:text-xs m-3 text-white p-3 rounded-md hover:bg-[#FD6F00]/80 transition  duration-200 cursor-pointer" onClick={()=>{alert("Thank you for your interest! I will get back to you soon.")}}>
                    <button className='cursor-pointer p-0'>Hire Me</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar