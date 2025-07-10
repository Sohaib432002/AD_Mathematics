import React from 'react'

function Section_1() {
    return (
        <>
            <section className='font-loto'>
                <div className='p-8' style={{ backgroundImage: "url('./Vector.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className='text-[24px] text-[#707070] m-0 font-semibold'>Hi I am </p>
                    <p className='text-[28px] text-[#959595] m-0 font-bold' >Mahmood Fazile</p>
                    <h2 className="text-[70px] font-black bg-[linear-gradient(90deg,_#984300_0%,_#FD6F00_46%,_#CA5900_100%)] bg-clip-text text-transparent">
                        UI/UX designer
                    </h2>
                    <div>
                        <div className="png-list my-10 flex justify-start items-center gap-5">
                            <div><img src="./frame/insta.png"  alt="png" /></div>
                            <div><img src="./frame/Linkeden.png" alt="png" /></div>
                            <div><img src="./frame/internet.png" alt="png" /></div>
                            <div><img src="./frame/Becon.png" alt="png" /></div>
                        </div>
                        <div className="btn-section0">
                            <button className="bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] mr-10 text-[20px] text-white px-10 py-3 rounded ">
                                Hire Me
                            </button>

                            <button className='bg-[transparent] border px-10 py-3 hover:bg-white transition  duration-200  rounded text-[#959595] font-bold rounded-lg text-[20px] ' >Download Cv</button>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-4'>
                        <div className='flex justify-between font-extrabold border-r text-[24px]'>
                            <h3>5+</h3>
                            <h3>Experiences</h3>
                        </div>
                        <div className='flex justify-between font-extrabold border-r text-[24px]'>
                            <h3>20+</h3>
                            <h3>Project done</h3>
                        </div>
                        <div className='flex justify-between font-extrabold  text-[24px]'>
                            <h3>80+</h3>
                            <h3>Happy Clients</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_1