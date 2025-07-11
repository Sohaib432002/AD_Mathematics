import { url } from 'inspector'
import React from 'react'

function Section_1() {
    const newLocal = "url('./frame/Ellipse 1 (3).png') no-repeated bottom ";
    return (
        <>
            <section className='font-loto px-70 max-[1500px]:px-3  m-7 flex justify-between max-[500px]:mx-0  max-[1000px]:flex-wrap' >
                <div className=' w-[50%] max-[1000px]:w-[100%] max-[1000px]:text-center  flex justify-center flex-col' style={{ backgroundImage: "url('./Vector.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className='text-[24px] text-[#707070] max-[550px]:text-[18px] m-0 font-semibold'>Hi I am </p>
                    <p className='text-[28px] text-[#959595] max-[550px]:text-[22px] m-0 font-bold' >Mahmood Fazile</p>
                    <h2 className="text-[70px] font-black bg-[linear-gradient(90deg,_#984300_0%,_#FD6F00_46%,_#CA5900_100%)] bg-clip-text text-transparent max-[550px]:text-[50px] ">
                        UI/UX designer
                    </h2>
                    <div>
                        <div className="png-list max-[1000px]:justify-center  my-10 flex justify-start items-center gap-5">
                            <div><img src="./frame/insta.png" alt="png" /></div>
                            <div><img src="./frame/Linkeden.png" alt="png" /></div>
                            <div><img src="./frame/internet.png" alt="png" /></div>
                            <div><img src="./frame/Becon.png" alt="png" /></div>
                        </div>
                        <div className="btn-section0">
                            <button className="bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] mr-10 text-[20px] text-white px-10 py-3 rounded cursor-pointer max-[550px]:text-[15px] max-[350px]:text-[12px] max-[400px]:m-3">
                                Hire Me
                            </button>

                            <button className='bg-[transparent] border px-10 py-3 hover:bg-white transition  duration-200  rounded text-[#959595] font-bold rounded-lg text-[20px] max-[550px]:text-[15px]  max-[350px]:text-[12px] cursor-pointer ' >Download Cv</button>
                        </div>
                    </div>
                    <div className='flex justify-start max-[1000px]:justify-center py-4'>
                    <div className='flex my-10 items-center bg-[#1e2125] max-[550px]:m-3 max-[850px]:w-[100%] max-[850px]:justify-center rounded p-4'>

                        <div className='flex justify-between flex-col max-[550px]:text-[17px] max-[550px]:text-left border-[#575757] font-extrabold border-r  max-[350px]:text-[12px] text-[20px]'>
                            <h3 className='py-3 text-[#FD6F00]'>5+</h3>
                            <h3 className='pr-5'>Experiences</h3>
                        </div>
                        <div className='flex  max-[350px]:text-[12px] justify-between max-[550px]:text-[15px] max-[550px]:text-left  border-[#575757] flex-col font-extrabold border-r text-[20px]'>
                            <h3 className='p-3 text-[#FD6F00]'>20+</h3>
                            <h3 className='px-5'>Project done</h3>
                        </div>
                        <div className='flex  max-[350px]:text-[12px] justify-between max-[550px]:text-[15px] max-[550px]:text-left  flex-col font-extrabold  text-[20px]'>
                            <h3 className='p-3 text-[#FD6F00]'>80+</h3>
                            <h3 className='px-5'>Happy Clients</h3>
                        </div>

                    </div>
                    </div>
                </div>
                <div style={{ backgroundImage: newLocal  }} className='w-[50%] max-[1000px]:w-[100%]  flex justify-center relative'>
                        <div><img src="./Man in black suit looking confident.png" className='min-w-50' alt="Self-pic" /></div>
                    <div className='bg-[#151718] bg-no-repeat bg-bottom absolute z-2 rounded-[100%] absolute z-2' >
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
        </>
    )
}

export default Section_1