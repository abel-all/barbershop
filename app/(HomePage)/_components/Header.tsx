import Image from 'next/image'
import logo from '@/public/logo.svg'
import Button from '@/components/Button'

const Header = () => {
  return (
    <div className='bg-background fixed z-50 border-b border-b-[rgb(168,168,168)] px-2 w-full'>
      <div className='flex justify-between items-center'>
        <Image className='max-sm:h-14' src={logo} height={56} alt='barbershop'/>
        <Button content='Login' width='w-[5rem]'/>
      </div>
    </div>
  )
}

export default Header