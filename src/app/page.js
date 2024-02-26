import Image from "next/image"
import Input from "@/components/input"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className='container mx-auto px-4'>
      <div className='flex justify-center mt-12'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={80}
          height={80}
        />
      </div>
      <div className='mt-10 flex flex-wrap justify-between'>
        <div className='w-full md:w-6/12 '>
          <h1 className='md:w-9/12 font-playfair-display text-[48px] leading-tight'>
            <span className='text-[26px]'>
              Discover Unmatched Elegance:
            </span>{" "}
            <br />
            Join the Arivla’s Waitlist for Premium Quality
            Fabrics Worldwide.
          </h1>
          <p className='mt-3 font-lato font-extralight md:w-10/12'>
            Join our waitlist for exclusive access to the
            world's finest textiles. Elevate your style with
            superior quality and craftsmanship. Your journey
            to unparalleled luxury begins here. Reserve your
            spot and redefine sophistication with Arivla.
          </p>
          <Input />
        </div>
        <div className='w-full md:w-1/3 mt-4 '>
          <Image
            src='/image.webp'
            alt='arivla'
            width={600}
            height={600}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
