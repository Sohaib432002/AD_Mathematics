import React from 'react'

function About() {
    return (
        <>
            <section className='px-70 max-[1500px]:px-3 ' >
                <div className='text-center '>
                    <h4 className='font-bold max-[550px]:text-[24px] text-[40px]'>About</h4>
                    <p className='text-[20px] max-[550px]:text-[16px] font-medium'>User Interface and User Experience and Also video editing </p>
                </div>
                <div className='flex max-[550px]:px-5 max-[1000px]:w-full  max-[950px]:flex-wrap max-[950px]:justify-center' >
                    <div className='flex justify-center items-center w-[40%] max-[550px]:justify-center max-[550px]:items-center'>
                        <img src="./Man in black suit looking confident.png" alt="Men" className='max-w-[566px] max-[550px]:max-w-[355px]  max-[350px]:max-w-[200px] ' />
                    </div>
                    <div className='text-left max-[550px]:flex max-[600px]:p-4 max-[550px]:flex-col max-[550px]:justify-center max-[550px]:items-center  w-[60%] max-[1000px]:w-full p-20 max-[550px]:px-3'>
                        <p className='text-[20px] break-all font-medium max-[550px]:text-[16px] max-[550px]:font-normal'>
                            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code.
                        </p>

                        <button className='bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] text-[20px] my-5 text-white px-3 py-3 rounded cursor-pointer max-[550px]:text-[15px] flex max-[350px]:text-[12px] max-[400px]:m-3'>
                            <img className='mr-2 ' src="./frame/Download.png" alt="Download_pic" />
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='flex justify-evenly max-[550px]:mx-2  flex-wrap max-[550px]:justify-between max-[550px]:items-start'>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative' alt="Ellipise" />
                            <img src="./About_frames/Vector.png" className='absolute' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] my-3 max-[660px]:text-[20px] text-[24px] font-bold ' >Figma</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative' alt="Ellipise" />
                            <img src="./About_frames/Group.png" className='absolute' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >AdobeXD</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative' alt="Ellipise" />
                            <img src="./About_frames/iconoir_adobe-photoshop.png" className='absolute' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >Adobe Photoshop</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative' alt="Ellipise" />
                            <img src="./About_frames/iconoir_adobe-illustrator.png" className='absolute' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >Adobe Illustrator</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative' alt="Ellipise" />
                            <img src="./About_frames/basil_adobe-premiere-outline.png" className='absolute' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >Adobe Premiere</p>
                    </div>
                </div>
            </section>
            <br />
            <br /><br />
        </>
    )
}

export default About