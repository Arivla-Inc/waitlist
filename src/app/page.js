import Image from "next/image"
import Input from "@/components/input"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <main className='container mx-auto px-4'>
        <div className='flex justify-center mt-8'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={80}
            height={80}
          />
        </div>
        <div className='my-5 flex '>
          <div className='w-full lg:w-6/12 '>
            <div className='w-full lg:w-10/12'>
              <h1 className='text-center font-semibold lg:text-left font-playfair-display text-[22px] lg:text-[40px] md:leading-normal capitalize'>
                <span className='text-[15px] font-medium md:text-[26px]'>
                  Discover Unmatched Elegance:
                </span>{" "}
                <br />
                Join the Arivla’s Waitlist for Premium
                Quality Fabrics Worldwide.
              </h1>
              <p className='text-center lg:text-left my-6 font-lato font-extralight'>
                Join our waitlist for exclusive access to
                the world's finest textiles. Elevate your
                style with superior quality and
                craftsmanship. Your journey to unparalleled
                luxury begins here. Reserve your spot and
                redefine sophistication with Arivla.
              </p>
              <Input />
            </div>
          </div>
          <div className='hidden lg:block w-full md:w-1/3 mt-4 px-6 flex-1'>
            <Image
              src='/desktop.webp'
              alt='arivla'
              width={600}
              height={500}
            />
          </div>
        </div>
      </main>
      <div className='lg:hidden block w-full mt-4'>
        <Image
          src='/newmobile.webp'
          alt='arivla'
          width={1200}
          height={500}
        />
      </div>
      <Footer />
    </>
  )
}
