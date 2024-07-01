import React from 'react'

export default function Program() {
    const programs = [
        {
            name: "Business Programs",
            image: "program-business.jpg"
        },
        {
            name: "Computer Science Programs",
            image: "program-computer.jpg"
        },
        {
            name: "Engineering Programs",
            image: "program-engineering.jpg"
        },
        {
            name: "Law Programs",
            image: "program-law.jpg"
        },
        {
            name: "Medicine Programs",
            image: "program-medicine.jpg"
        },
    ]

  return (
    <>
        <h1 className="text-5xl text-center mt-10">Our Programs</h1>
        <h2 className="text-lg text-center text-gray-500 mb-10">What we offer to create Industry Ready Professionals</h2>
        <div className="flex justify-center items-center flex-wrap mb-10 m-5 gap-5">
        {
            programs.map((program)=>(
                <div className="flex flex-col items-center gap-5 bg-base-100 w-fit p-5">
                <img src={program.image} className='h-56 w-56 object-cover rounded-lg'/>
                <h1 className="text-xl font-semibold">{program.name}</h1>
                </div>
            ))
        }
        </div>
    </>
  )
}