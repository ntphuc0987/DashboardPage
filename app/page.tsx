import Image from "next/image";
import Logo from "./ui/logo";
import Link from "next/link";
import { Button } from "@app/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import style from '@app/home.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-mango p-4 md:h-32">
        <Logo/>
      </div>
      <div className="flex grow  flex-col gap-4 md:flex-row mt-4">
        
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-2xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is the example for the {' '}
            <Link href="https://nextjs.org/learn">
              Next.js Learn Course
            </Link>,brought to you be vercel.
          </p>
          <Button type="button" className="flex items-center gap-5 self-start rounded-lg bg-mango px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mango-light md:text-base">
            Login <ArrowRightIcon className={style.svg} />
          </Button>
        </div>

        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-slate-200 rounded-lg">
          <Image 
            alt="Growth Chart"
            src="/hero-desktop.jpg"
            width={1000}
            height={1000}
            className="hidden md:block object-cover"
          />
          <Image 
            alt="Growth Chart"
            src="/hero-mobile.jpg"
            width={500}
            height={500}
            className="block md:hidden object-cover"
          />
        </div>

      </div>
    </main>
  );
}
