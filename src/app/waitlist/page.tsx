"use client";
import Image from "next/image";
import { useState } from "react";
import Loader from "../../components/loader";
import { accessTokenStore, arivlaAccessToken } from "../../store/accessToken";
import storage from "../../lib/storage";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const api = process.env.NEXT_PUBLIC_BASE_URL;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setPassword("");
    setEmail("");
    setError(false);
  };

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length === 0 || !regex.test(email)) {
      setError(true);
    }
    if (password.length === 0) {
      setError(true);
    }
    if (email.length > 0 && regex.test(email) && password.length > 0) {
      setIsLoading(true);
      const res = await fetch(`${api}/user/admin-login`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      setIsLoading(false);
      const resData = await res.json();

      if (res.status === 200) {
        toast.success(resData.message);
        //store in store
        const accessToken = resData.accessToken;
        accessTokenStore.accessToken = accessToken;
        //store in local storage
        storage.set(arivlaAccessToken, accessToken);
        //navigate
        router.push("/list/mylist");
      }
      if (res.status === 400) {
        toast.error(resData.message);
      }
      if (res.status === 500) {
        toast.error("Server error, Please try again later");
      }
      reset();
    }
  };

  return (
    <div className="relative min-h-screen px-[5%] sm:p-0">
      <div className="w-full h-[60px] absolute top-0 left-0">
        <Image src="/login-top.png" alt="" fill />
      </div>

      <div className="container flex flex-col items-center w-full mx-auto py-14">
        <Image src="/logo.svg" alt="" width={120} height={120} />
        <div className="mt-6 text-2xl font-bold text-black mb-11">
          WAITLIST LOGIN
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full sm:w-[460px]"
          noValidate
        >
          <div>
            <input
              className="w-full p-4 text-sm text-gray-800 border outline-none"
              name="email"
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="my-1 text-sm text-left">
              {error && email.length <= 0 ? (
                <p className="text-red-500">Email Address is required</p>
              ) : error && !regex.test(email) ? (
                <p className="text-red-500">
                  Please enter a valid email address
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <input
            className="w-full p-4 text-sm text-gray-800 border outline-none"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-left">
            {error && password.length <= 0 ? (
              <p className="text-sm text-red-500">Password is required</p>
            ) : (
              ""
            )}
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="md:px-12 w-full px-4 whitespace-nowrap py-4 bg-gray-900 text-[#FAFBFF]"
          >
            {isLoading ? <Loader className={""} /> : "Login"}
          </button>
        </form>
      </div>

      <div className=" w-full h-[60px] absolute bottom-0 left-0">
        <Image src={"/login-bottom.png"} alt="" fill />
      </div>
    </div>
  );
};

export default Login;
