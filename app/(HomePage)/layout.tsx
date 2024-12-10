import React, { ReactNode } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'

const layout = ({ children } : { children : ReactNode}) => {
  return (
    <div className='h-full'>
      <Header/>
      <main className='pt-14 h-[2000px]'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default layout