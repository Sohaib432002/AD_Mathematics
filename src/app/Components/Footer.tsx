import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Footer() {
    return (
        <>
            <section className=' bg-[#2a2a2b] '>
                <div className='flex justify-center items-center p-10 '>
                    <img src="./LOGO.png" alt="logo" />
                </div>
                <div className="nav-list">
                    <ul className='flex justify-center items-center gap-30 max-[950px]:gap-10 max-[580px]:gap-4  text-gray'>
                        <li className='list-none ' ><a className='no-underline font-medium text-[20px] max-[580]:text-[15px] hover:text-[#E46400] transition  duration-200' href="#Home">Home</a></li>
                        <li className='list-none ' ><a className='no-underline font-medium text-[20px] max-[580]:text-[15px] hover:text-[#E46400] transition  duration-200' href="#Service">Service</a></li>
                        <li className='list-none' ><a className='no-underline font-medium text-[20px] max-[580]:text-[15px] hover:text-[#E46400] transition  duration-200' href="#About">About me</a></li>
                        <li className='list-none' ><a className='no-underline font-medium text-[20px] max-[580]:text-[15px] hover:text-[#E46400] transition  duration-200' href="#Portfolio">Portfolio</a></li>
                        <li className='list-none' ><a className='no-underline font-medium text-[20px] max-[580]:text-[15px] hover:text-[#E46400] transition  duration-200' href="#Contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className="png-list    my-10 flex justify-center items-center gap-5">
                    <a href="https://github.com/adnan2021asl/My-Projects" target="_blank" rel="noopener noreferrer">
                        <img src="./frame/internet.png" alt="png" />
                    </a><div ><a href="https://www.linkedin.com/in/adnan-aslam-malik-53a86a26a/"><img src="./frame/Linkeden.png" alt="png" /></a></div>
                </div>
                <div className='flex justify-center items-center max-[500px]:flex-wrap max-[500px]:gap-5 gap-10 my-5 text-[#959595] font-bold'>
                    <span className='my-2'><EmailIcon />adnanaslammalik320@gmail.com</span>
                    <span className='my-2'><LocalPhoneIcon />+92337-6184496</span>
                </div>
                <div className='flex justify-center items-center b-t-2 mt-5 '>
                    <p className='text-center text-[#959595] p-3 font-bold'>© 2023 Mahmood Fazile. All rights reserved.</p>
                </div>
            </section>
        </>
    )
}

export default Footer