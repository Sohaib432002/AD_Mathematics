import React from 'react'

function Section2() {
    return (
        <>
            <section className='font-loto m-7  max-[500px]:mx-0  max-[1000px]:flex-wrap' >
                <div className='text-center'>
                    <h4 className='font-bold max-[550px]:text-[24px] text-[40px]'>Services</h4>
                    <p className='text-[20px] max-[550px]:text-[16px] font-medium'>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
                </div>
                <div className='grid px-70 max-[1500px]:px-3 grid-cols-3 max-[400px]:grid-cols-1 max-[550px]:g-0 gap-5 max-[1000px]:grid-cols-2 max-[1000px]:gap-3 mt-10'>
                    <div className='flex  flex-col items-center justify-center text-center p-5 m-3 border border-[#707070] rounded-lg hover:bg-[#FD6F00] hover:text-white transition duration-200 cursor-pointe'>
                        <img src="./Combined-Shape.png" alt="Combined-Shape" className=' max-[550px]:max-w-[34px]    max-w-[58px]' />
                        <h4 className='text-[24px] max-[550px]:text-[20px] font-bold'>Data Analysis & Visualization</h4>
                        <p className='mt-5 text-[20px] font-medium max-[550px]:text-[16px]'>Clean, analyze, and visualize data using Python and Excel.
                            Discover patterns and insights hidden in raw data.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center p-5 m-3 border border-[#707070] rounded-lg hover:bg-[#FD6F00] hover:text-white transition duration-200 cursor-pointe'>
                        <img src="./Combined-Shape.png" alt="Combined-Shape" className=' max-[550px]:max-w-[34px]    max-w-[58px]' />
                        <h4 className='text-[24px] max-[550px]:text-[20px] font-bold'>Machine Learning Solutions</h4>
                        <p className='mt-5 text-[20px] font-medium max-[550px]:text-[16px]'>Build ML models to solve real-world problems like prediction, classification, and recommendation.
                            Use algorithms like XGBoost, CNNs, and regression techniques.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center p-5 m-3 border border-[#707070] rounded-lg hover:bg-[#FD6F00] hover:text-white transition duration-200 cursor-pointe'>
                        <img src="./Combined-Shape.png" alt="Combined-Shape" className=' max-[550px]:max-w-[34px]    max-w-[58px]' />
                        <h4 className='text-[24px] max-[550px]:text-[20px] font-bold'>Research & Simulation Support</h4>
                        <p className='mt-5 text-[20px] font-medium max-[550px]:text-[16px]'>Assist in solving mathematical problems and writing research reports.
                            Help with simulations, optimization, and LaTeX formatting.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center p-5 m-3 border border-[#707070] rounded-lg hover:bg-[#FD6F00] hover:text-white transition duration-200 cursor-pointe'>
                        <img src="./Combined-Shape.png" alt="Combined-Shape" className=' max-[550px]:max-w-[34px]    max-w-[58px]' />
                        <h4 className='text-[24px] max-[550px]:text-[20px] font-bold'> Academic Tutoring & Assignment Help</h4>
                        <p className='mt-5 text-[20px] font-medium max-[550px]:text-[16px]'>Support in learning university-level Mathematics and ML concepts.
                            Help with assignments in statistics, linear algebra, and Python coding.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center p-5 m-3  border border-[#707070] rounded-lg hover:bg-[#FD6F00] hover:text-white transition duration-200 cursor-pointe'>
                        <img src="./Combined-Shape.png" alt="Combined-Shape" className=' max-[550px]:max-w-[34px]    max-w-[58px]' />
                        <h4 className='text-[24px] max-[550px]:text-[20px] font-bold'>Event & Media Management</h4>
                        <p className='mt-5 text-[20px] font-medium max-[550px]:text-[16px]'>Plan and manage student society events and media content.
                            Experience in leading teams, promotions, and organizing university activities.</p>
                    </div>


                </div>
            </section>
            <br />
            <br />
            <br />
        </>
    )
}

export default Section2