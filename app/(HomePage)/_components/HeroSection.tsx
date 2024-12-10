import Button from '@/components/Button'

const HeroSection = () => {

  return (
    <div className='relative flex justify-center items-center'>
      <video className='w-full max-h-screen' autoPlay loop muted playsInline src="https://videos.pexels.com/video-files/4177957/4177957-hd_1920_1080_30fps.mp4" />
      <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
        <div className='space-y-4 '>
          <div className='text-background font-bold text-center text-[3.5rem] tracking-[-0.22rem] leading-[4.25rem] max-md:text-[3rem] max-md:tracking-[-0.15625rem] max-md:leading-[3.5rem] max-sm:text-[2rem] max-sm:tracking-[-0.125rem] max-sm:leading-[2.25rem]'>
            Your hair, <span className='text-primary'>your rules.</span><br/>We’re just here to help.
          </div>
          <div className='flex justify-center'>
            <Button content="Book now"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection