
import React from 'react'

const Contact = () => {
    return (
        <>
            <section id='Contact' className='font-loto px-70 max-[1500px]:px-5  max-[500px]:mx-0  max-[1000px]:flex-wrap' >
                <div className='text-center'>
                    <h4 className='font-bold max-[550px]:text-[24px] text-[40px]'>Contact me</h4>
                    <p className='text-[20px] max-[550px]:text-[16px] font-medium'>Cultivating Connections: Reach Out and Connect with Me</p>
                </div>
                <div>
                    <form 
    className='my-10 flex flex-col' 
    action="https://api.web3forms.com/submit" 
    method="POST"
>
    {/* Replace with your actual Web3Forms Access Key */}
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

    {/* Optional Honeypot Field for Spam Protection */}
    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

    <div className='flex max-[750px]:flex-col max-[750px]:justify-center max-[750px]:items-center flex-wrap justify-around'>
        <input 
            className='p-4 bg-[#2a2a2b] rounded-sm w-[40%] max-[750px]:w-[95%] focus:outline-none max-[750px]:my-4' 
            type="text" 
            placeholder='Name' 
            name="name"
            required 
        />
        <input 
            type='email' 
            className='p-4 bg-[#2a2a2b] max-[750px]:w-[95%] rounded-sm w-[40%] focus:outline-none max-[750px]:my-4' 
            placeholder='Email' 
            name="email"
            required 
        />
    </div>

    <div className='flex flex-wrap max-[750px]:flex-col max-[750px]:justify-center max-[750px]:items-center justify-around'>
        <input
            type='tel'
            className='p-4 max-[750px]:w-[95%] bg-[#2a2a2b] my-3 rounded-sm w-[40%] focus:outline-none text-[#959595]'
            placeholder='Phone'
            name="phone"
            maxLength={12}
        />
        <select
            defaultValue=""
            className="p-4 bg-[#2a2a2b] text-[#959595] my-3 max-[750px]:w-[95%] rounded-sm w-[40%] focus:outline-none"
            name="service"
            id="service"
            required
        >
            <option value="" disabled>Service of Interest</option>
            <option value="DataAnalysis">Data Analysis & Visualization</option>
            <option value="ML-Solutions">Machine Learning Solutions</option>
            <option value="Research">Research Assistant / Math-Based Simulation Work</option>
        </select>
    </div>

    <div className='flex max-[750px]:flex-col max-[750px]:justify-center max-[750px]:items-center flex-wrap justify-around items-baseline'>
        <input 
            type='time' 
            className='p-4 max-[750px]:w-[95%] bg-[#2a2a2b] my-3 rounded-sm w-[40%] focus:outline-none' 
            placeholder='Timeline' 
            name="timeline"
        />
        <textarea 
            name="message" 
            className='p-4 max-[750px]:w-[95%] bg-[#2a2a2b] my-3 rounded-sm w-[40%] focus:outline-none' 
            placeholder='Project Details...' 
            cols={4} 
            rows={4} 
            required
        ></textarea>
    </div>

    <div className='flex justify-end items-left max-[750px]:justify-center pr-16 my-5'>
        <button 
            type='submit' 
            className='text-[#959595] rounded-sm border py-3 px-8 hover:bg-[#2a2a2b] cursor-pointer'
        >
            Send
        </button>
    </div>
</form>

                </div>
            </section>
            <br /><br /><br />
        </>
    )
}

export default Contact