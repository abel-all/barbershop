import Button from '@/components/Button'
import Link from 'next/link'

const HeroSection = () => {

  return (
    <div className='relative flex justify-center items-center'>
      <video className='w-full max-h-screen' autoPlay loop muted playsInline src="https://videos.pexels.com/video-files/4177957/4177957-hd_1920_1080_30fps.mp4" />
      <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
        <div className='space-y-4'>
          <div className='text-background font-bold text-center custome-text-style animate-scrolling'>
            Your hair, <span className='text-primary'>your rules.</span><br/>We’re just here to help.
          </div>
          <Link className='flex justify-center animate-scrolling' href="/login">
            <Button content="Book now"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection