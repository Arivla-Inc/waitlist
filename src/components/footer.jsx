import React from 'react'


const Footer = () => {
  return (
            <p className='font-lato text-center text-gray-600 text-[12px] py-4'>
              © <em>{new Date().getFullYear()}, Arivla. All right reserved</em>
            </p>
  )
}

export default Footer