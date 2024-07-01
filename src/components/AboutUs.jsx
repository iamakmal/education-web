import React from 'react'

export default function AboutUs() {
  return (
    <>
    <div className="flex justify-center mx-5 gap-5 flex-row-reverse flex-wrap items-center lg:my-36">
        <div className="lg:w-1/2">
        <h1 className="text-3xl md:text-5xl mb-5 font-semibold text-center">Welcome to Hanover!</h1>
        <p className="text-lg md:text-xl text-center mb-2">Hanover is recognized as one of the best Technology University in the world. Established in the 1950s, Hanover has been able to secure a position in the top 10 universities in the world.</p>
        <p className="text-lg md:text-xl text-center">Building a strong sense of community in Hanover is both importance and doable. Our university uses different Community-Building approaches, that helps us to be a family</p>
        </div>
        <img src="about.jpg" className="w-[700px]"/>
    </div>
    </>
  )
}
