import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link';

interface ServicesCardProps {
    image: StaticImageData;
    header: string;
    description: string;
    bgColor: string;
    price: string;
}

const ServicesCard : React.FC<ServicesCardProps> = ({ image, header, description, bgColor, price }) => {
  return (
    <div className={`lg:relative lg:overflow-hidden lg:rounded-3xl lg:w-[59.375rem] lg:h-[30rem] ${bgColor} max-lg:bg-transparent lg:px-20 lg:py-14 max-lg:flex max-lg:flex-col max-lg:gap-4`}>
        <Image className="lg:absolute z-2 lg:bottom-[-1.375rem] lg:right-[-9.75rem] max-lg:rounded-3xl" src={image} width={800} alt='haircut'/>
        <div className='lg:h-full flex flex-col lg:justify-between max-lg:gap-4'>
            <div className='flex flex-col gap-7 max-lg:gap-3'>
                <div className='font-bold text-2xl max-md:text-xl'>{header}</div>
                <div className='text-xl lg:max-w-44 max-md:text-base opacity-80'>{description}</div>
            </div>
            <Link href="/login">
              <Button width={"w-[8rem]"} content={price}/>
            </Link>
        </div>
    </div>
  )
}

export default ServicesCard
