"use client"

import React, {useState} from 'react'
import Loader from './loader';

const Input = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false);
  
  
  
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email.length === 0 || !regex.test(email)) {
        setError(true);
      }
      if (email.length > 0 && regex.test(email)) {
        setIsLoading(true);
        const res = await fetch('/api/enlist', {
          method: 'POST',
          headers:{
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            email
          })
        })
        // if (res.status === 200){
        //   setOpenSuccess(true)
        // }
        // if (res.status === 400) {
        //   setErrorMsg("Email already waitlisted")
        //   setTimeout(() => {
        //     setErrorMsg(false);
        //    }, 3000); 
        // }
        // if (res.status === 500) {
        //   setErrorMsg("Server error, Please try again later")
        //   setTimeout(() => {
        //     setErrorMsg(false);
        //    }, 3000); 
        // }
        setIsLoading(false)
        setEmail('');
        setError(false);
      }
    };


  return (
    <>
    <div className='flex space-x-4 mt-2'>
    <div className='relative md:w-6/12 w-full'>
    <form noValidate>
       <input
                  className="border border-1 text-gray-800 p-3.5 bg-transparent text-sm w-full focus:outline-gray-800"
                  name="email"
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
      </form>
      </div>
      <button onClick={handleSubmit} className="md:px-12 px-4 whitespace-nowrap py-2.5 bg-gray-900 text-[#FAFBFF]">{isLoading ? <Loader /> : "Join Waitlist"}</button>
    </div>
         <div className='text-left'>
         {error && email.length <= 0 ? (
           <p className="text-red-500 py-2">Email Address is required</p>
         ) : error && !regex.test(email) ? (
           <p className="text-red-500 py-2">Please enter a valid email address</p>
         ) : (
           ''
         )}
           </div>
           </>
  )
}

export default Input