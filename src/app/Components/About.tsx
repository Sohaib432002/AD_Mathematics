import React from 'react'

function About() {
    return (
        <>
            <section id='About' className='px-70 max-[1500px]:px-3 ' >
                <div className='text-center '>
                    <h4 className='font-bold max-[550px]:text-[24px] text-[40px]'>About</h4>
                    <p className='text-[20px] max-[550px]:text-[16px] font-medium'>User Interface and User Experience and Also video editing </p>
                </div>
                <div className='flex max-[550px]:px-5  max-[1000px]:w-full  max-[950px]:flex-wrap max-[950px]:justify-center' >
                    <div className='flex justify-center items-center min-[550px]:w-[40%] max-[550px]:w-full max-[550px]:bg-[#312f2c]  rounded-3xl max-[550px]:justify-center max-[550px]:items-center'>
                        <img src="./Man in black suit looking confident.png" alt="Men" className='max-w-[566px] max-[550px]:max-w-[355px]  max-[350px]:max-w-[200px] ' />
                    </div>
                    <div className='text-left max-[550px]:flex max-[600px]:p-4 max-[550px]:flex-col max-[550px]:justify-center max-[550px]:items-center  w-[60%] max-[1000px]:w-full p-20 max-[550px]:px-3'>
                        <p className='text-[20px] break-all font-medium max-[550px]:text-[16px] max-[550px]:font-normal'>
                           Adnan Aslam Malik, a mathematics student and an emerging force in the world of data and algorithms, navigates the ever-evolving landscape of technology with a passion rooted in logic and precision. With a mind sharpened by years of mathematical training, he explores the intricate patterns of machine learning, crafting intelligent systems that reflect both analytical depth and creative insight. His canvas is data — vast, raw, and complex — which he sculpts using Python, transforming numbers into meaningful predictions and solutions. Each line of code is a calculated step, a logical proof, building bridges between theory and real-world application. In this dynamic realm, Adnan stands as both a problem-solver and a visionary, confronting challenges like a strategist and debugging with the clarity of a true analyst. His pursuit is not only of accuracy but of innovation — a journey to unlock the potential of intelligent systems through the lens of mathematical elegance.
                        </p>

                        <a href="\AdnanAslamMalik_CV.pdf" download > <button className='bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] text-[20px] my-5 text-white px-3 py-3 rounded cursor-pointer max-[550px]:text-[15px] flex max-[350px]:text-[12px] max-[400px]:m-3'>
                            <img className='mr-2 ' src="./frame/Download.png" alt="Download_pic" />
                            Download CV
                        </button></a>
                    </div>
                </div>
                <div className='flex justify-evenly max-[550px]:mx-2  flex-wrap max-[550px]:justify-between max-[550px]:items-start'>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative max-[600px]:max-w-[70%]' alt="Ellipise" />
                            <img src="./About_frames/Vector.png" className='absolute max-[600px]:max-w-[70%]' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] my-3 max-[660px]:text-[20px] text-[24px] font-bold ' >Figma</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative max-[600px]:max-w-[70%]' alt="Ellipise" />
                            <img src="./About_frames/Group.png" className='absolute max-[600px]:max-w-[70%]' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >AdobeXD</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative max-[600px]:max-w-[70%]' alt="Ellipise" />
                            <img src="./About_frames/iconoir_adobe-photoshop.png" className='absolute max-[600px]:max-w-[70%]' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >Adobe Photoshop</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative max-[600px]:max-w-[70%]' alt="Ellipise" />
                            <img src="./About_frames/iconoir_adobe-illustrator.png" className='absolute max-[600px]:max-w-[70%]' alt="png" />
                        </div>
                        <div><img src="./About_frames/100.png" alt="100%" /></div>
                        <p className='text-[#959595] max-[660px]:text-[20px] my-3 text-[24px] font-bold ' >Adobe Illustrator</p>
                    </div>
                    <div className='flex-col flex justify-center items-center'>
                        <div className='flex justify-center items-center my-5 '>
                            <img src="./About_frames/Ellipse 4.png" className='relative max-[600px]:max-w-[70%]' alt="Ellipise" />
                            <img src="./About_frames/basil_adobe-premiere-outline.png" className='absolute max-[600px]:max-w-[70%]' alt="png" />
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