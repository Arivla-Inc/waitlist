import Image from "next/image"
import Input from "@/components/input"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Reasons from "@/components/Reasons"

export default function Home() {
  return (
    <>
      <Header />
      <main className='container px-4 mx-auto'>
        <div className='flex mt-7 '>
          <div className='w-full lg:w-6/12 '>
            <h1 className='text-center font-medium lg:text-left font-playfair-display text-2xl md:text-[36px] md:leading-[56px] leading-9 capitalize'>
              Welcome to Arivla, your go-to spot for
              hassle-free fabric shopping.
            </h1>
            <div className='flex flex-col gap-8 mt-6 mb-4 text-xl font-light leading-7 text-center lg:text-left font-lato lg:gap-6'>
              <p>
                {`Ready to level up your fashion game? Don't miss out on the
                chance to be part of this game-changing fashion movement.`}
              </p>
              <Image
                src='/hero_image.webp'
                alt='arivla'
                width={1200}
                height={500}
                className=' lg:hidden'
              />
              <p>
                {`Sign up to our waitlist now and get ready to slay the style game
                with Arivla. Whether you're buying or selling, join us and stay
                ahead of the curve!`}
              </p>
            </div>
            <Input />
          </div>
          <div className='flex-1 hidden w-full px-6 mt-4 lg:block md:w-1/3'>
            <Image
              src='/hero_image.webp'
              alt='arivla'
              width={1200}
              height={500}
            />
          </div>
        </div>
        <Reasons />
      </main>

      <Footer />
    </>
  )
}
