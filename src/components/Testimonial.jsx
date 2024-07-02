import React from 'react'

export default function Testimonial() {

    const testimonials = [
        {
            message: "Hanover has exceeded my expectations. The professors are knowledgeable and supportive, and the online resources are incredibly helpful. I've grown so much academically and personally.",
            name: "Chris Collins",
            occupation: "Computer Science Student",
            image: "avatar1.png"
        },
        {
            message: "The hands-on learning experiences and the support from the faculty at Hanover have been phenomenal. I feel fully prepared for my career in medicine thanks to their comprehensive program.",
            name: "Eliza Turner",
            occupation: "Medicine Student",
            image: "avatar2.png"
        },
        {
            message: "Attending Hanover was the best decision I ever made. The curriculum is rigorous and relevant, and the career services team helped me land my dream job before I even graduated!",
            name: "Emily Watson",
            occupation: "Business Management Graduate",
            image: "avatar3.png"
        },
    ]

    return (
        <>
            <h1 className="text-4xl text-center mt-10">Why Students Love Hanover</h1>
            <h2 className="text-lg text-center text-gray-500 mb-10">Some of our Success Stories</h2>
            
            <div className="flex justify-center items-center flex-wrap m-10 gap-5 p-5">
            {
                testimonials.map((testimonial)=>(
                    <div className="bg-[#b7dbff] rounded-lg w-72 lg:w-96 p-5">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-12 w-12 text-[#364CE7]"
                    >
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>
                    <p className="text-base lg:text-lg">{testimonial.message}</p>
                    <div className="flex mt-5 justify-start gap-5 items-center">
                        <img src={testimonial.image} className="h-20 w-20 rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                            <h1>{testimonial.occupation}</h1>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </>
    )
}
