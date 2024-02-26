

import React from 'react'
import { socials } from './socialData'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="mt-10 mb-4 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="text-base font-medium whitespace-nowrap">
            <p className='font-lato text-[14px]'>
              © <em>{new Date().getFullYear()} Arivla, Inc. All rights reserved</em>
            </p>
          </div>
          <div className="flex py-2 gap-4 items-center">
            {socials.map((social) => (
              <Link key={social.name} href={social.href} target="_blank">
                <Image
                  src={social.logo}
                  alt={social.name}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
            <Image src="/globe.svg" alt="globe" width={20} height={20} />
            <select
              className="pr-2 bg-transparent outline-none text-base"
              name="language"
              id="language"
            >
              <option value="english">English</option>
            </select>
          </div>
        </div>
  )
}

export default Footer