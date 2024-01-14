"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <nav className='flex justify-around items-center bg-black h-14 text-white'>
    <Link href='/'>Home</Link>
    <button onClick={() => router.push("/about")}>About</button>
    <button onClick={() => router.push("/contact")}>Contact</button>
  </nav>
  )
  }
