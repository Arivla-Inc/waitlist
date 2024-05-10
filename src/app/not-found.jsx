import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
      <div className="px-4">
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={120}
            height={120}
            quality={100}
          />
        </Link>
      </div>
      <div className="h-16 border"></div>
      <div className="px-4">
        <h1 className="text-2xl text-grey-900">Page not found</h1>
        <p className="text-gray-700 ">
          The page you tried to access does not exist.
        </p>
        <Link href="/" className="underline text-blue2D">
          Go back
        </Link>
      </div>
    </div>
  );
}
