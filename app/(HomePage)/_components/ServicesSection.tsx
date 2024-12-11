import React from 'react'
import ServicesCard from "./ServicesCard"
import card1 from "@/public/card1.jpg"
import card2 from "@/public/card2.jpg"
import card3 from "@/public/card3.jpg"

const cards = [
    {price: "Starting at 30$", image: card1, header: "Haircuts", description: "Classic styles and modern trends tailored to your preferences.", bgColor: "bg-[#00e8e822]"},
    {price: "Starting at 15$", image: card2, header: "Beard Trim", description: "Precision shaping and styling for the perfect look.", bgColor: "bg-[#fef7e1]"},
    {price: "Starting at 20$", image: card3, header: "Hot Towel Shave", description: "Relax and refresh with our luxurious hot towel shave experience.", bgColor: "bg-[#2580bd]"},
]

const ServicesSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-12'>
        <div className='custome-text-style mb-8'>Our Services</div>
        <div className='max-lg:px-6 w-full services-container flex flex-col gap-10 items-center '>
            {cards.map(({ image, header, description, bgColor, price }, index) => (
                <ServicesCard key={index} image={image} header={header} description={description} bgColor={bgColor} price={price} />
            ))}
        </div>
    </div>
  )
}

export default ServicesSection