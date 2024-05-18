import Link from "next/link"
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-6 bg-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left mr-[300px]">
          <Image
            src="/fynbos-logo.png"
            alt=""
            className="z-20 mb-2"
            width={200}
            height={100}
          />
          <div className="text-lg text-black mt-10">
            Goddard Hall 80
            <br />
            Washington Square E,
            <br />
            New York, NY 10003, USA
            <br />
            +44 (0) 207 739 1521
            <br />
            info@ferme.com
          </div>
        </div>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:gap-8">
          <div className="flex flex-col items-center text-center sm:text-left mr-[300px]">
            <Link href="#" className="text-lg text-black mb-2">FAQ</Link>
            <Link href="#" className="text-lg text-black mb-2">Contact Us</Link>
            <Link href="#" className="text-lg text-black mb-2">Check Order Status</Link>
            <Link href="#" className="text-lg text-black mb-2">Workshop</Link>
            <Link href="#" className="text-lg text-black mb-2">Location</Link>
          </div>
          
          <div className="flex flex-col items-center text-center sm:text-left sm:ml-8">
            <span className="text-lg text-black mb-2">Follow us</span>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/eastcapeproteaandfynbos/">
                <Image
                  src="/insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.facebook.com/Eastcapeproteaandfynbos/">
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-black"></div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 mt-[80px]">
      <div className="text-sm text-black">© 2024 East Cape Fynbos and Protea. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4 text-black dark:hover:text-gray-50"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm font-medium text-black hover:underline hover:underline-offset-4 dark:hover:text-gray-50"
            href="#"
          >
            Terms of Service
          </Link>
        </nav>
      </div>

    </footer>
  )
}

