import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className='flex min-h-[calc(100vh-64px)] items-center justify-center'>
      <div className="px-4">
        <Link href='/'>
           <Image src="/logo.svg" alt="logo" width={80} height={80} />
           </Link>
      </div>
        <div className="border h-16"></div>  
      <div className="px-4"> 
      <h1 className='text-2xl text-grey-900'>
        Page not found
      </h1>
      <p className=' text-gray-700'>
        The page you tried to access does not exist.
      </p>
      <Link
        href='/'
        className='text-blue2D underline'
      >
        Go back
      </Link>
        </div>
    </div>
  )
}