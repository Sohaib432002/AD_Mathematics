"use client";
import React, { useState } from 'react'

const Projects = [
    {
        "title": "Conversational AI Powered Banking: Enhancing Customer Services",
        "description": "Developing an AI-powered banking system capable of understanding and responding to banking-related queries, aiming to enhance customer service.",
        "categories": ["Artificial Intelligence", "Natural Language Processing", "FinTech"],
        'img': 'https://i.pinimg.com/736x/cd/31/59/cd3159832eacd5930014ac66b68a5ec0.jpg',
    },
    {
        "title": "Comparative Analysis of CNN Architectures for Facial Expression Recognition",
        "description": "Explored different convolutional neural network (CNN) architectures for recognizing facial expressions using a dataset of 35,000 images. Evaluated models based on accuracy, efficiency, and generalization.",
        "categories": ["Deep Learning", "Computer Vision"],
        'img': 'https://i.pinimg.com/1200x/ff/5e/92/ff5e924d64dadf8181ef24e028858958.jpg'
    },
    {
        "title": "House Price Prediction Using Regression Models: A Comparative Study",
        "description": "Analyzed the performance of various regression models—linear, polynomial, decision tree, and random forest—to predict house prices and determine the most accurate method.",
        "categories": ["Machine Learning", "Regression", "Data Science"],
        'img': 'https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg'
    },
    {
        "title": "Customer Churn Prediction Using XGBoost",
        "description": "Implemented XGBoost to predict customer churn and identify key features contributing to customer retention or loss.",
        "categories": ["Machine Learning", "Classification", "Business Analytics"],
        'img': 'https://i.pinimg.com/736x/cf/5e/2c/cf5e2cc47df5cff8a39b24207766f7f8.jpg'
    }
]



function Portfolio() {
    const [filter, setFilter] = useState('All')
    const filteredProjects = filter === 'All' ? Projects : Projects.filter(project => project.categories.includes(filter));
    return (
        <>
            <section id='Portfolio' className='px-70 max-[1500px]:px-3 ' >
                <div className='text-center '>
                    <h4 className='font-bold max-[550px]:text-[24px] text-[40px]'>Portfolio</h4>
                </div>
                <br />
                <br />
                <div className='flex justify-center flex-wrap gap-5  ' >
                    <button className='px-5 py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] cursor-pointer transition  duration-300  font-bold text-[16px] bg-[#575757] max-w-100' onClick={() => setFilter('All')}>All</button>
                    <button className='px-5  py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] cursor-pointer transition  duration-300 font-bold text-[16px] bg-[#575757]' onClick={() => setFilter('Deep Learning')} >Deep Learning</button>
                    <button className='px-5  py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] cursor-pointer transition  duration-300 font-bold text-[16px] bg-[#575757]' onClick={() => setFilter('Computer Vision')} >Computer Vision</button>
                    <button className='px-5  py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] transition cursor-pointer  duration-300 font-bold text-[16px] bg-[#575757]' onClick={() => setFilter('Machine Learning')} >Machine Learning</button>
                    <button className='px-5  py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] transition  cursor-pointer duration-300 font-bold text-[16px] bg-[#575757]' onClick={() => setFilter('Classification')} >Classification</button>
                    <button className='px-5  py-3 rounded hover:bg-[linear-gradient(90deg,_#FD6F00_0%,_#E46400_100%)] transition  cursor-pointer duration-300 font-bold text-[16px] bg-[#575757]' onClick={() => setFilter('Artificial Intelligence')} >Artificial Intelligence</button>
                </div>
                <br /><br />
                <div className='grid  max-[1250px]:mx-10  max-[1020px]:grid-cols-2 max-[700px]:grid-cols-1 lg:grid-cols-3 gap-4'>

                    {filteredProjects.map((project, index) => (
                        <div key={index} className='flex flex-col mb-5'>
                            <img className='rounded-xl h-[45vh]' src={project.img} alt={`Project ${index + 1}`} />
                            <div className='flex justify-between bg-[#2a2a2b]'>
                                <p title={project.title} className='text-[16px] max-[700px]:text-[14px]  px-4 py-5 font-bold'>{project.title.length > 20 ? project.title.slice(0, 20) + '...'
                                    : project.title} </p>
                                <p className='text-[16px] max-[700px]:text-[14px] px-4 py-5 font-bold'>{project.categories[0]}</p>
                            </div>
                        </div>)
                    )}


                </div>

            </section>
            <br /><br /><br />
        </>
    )
}

export default Portfolio