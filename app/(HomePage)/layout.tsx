import React, { ReactNode } from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'

const layout = ({ children } : { children : ReactNode}) => {
  return (
    <div className='h-full'>
      <Header/>
      <main className='py-14'>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default layout