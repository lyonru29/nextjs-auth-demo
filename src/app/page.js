
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoginBtn from './LoginBtn'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-64 flex flex-col'>
        <div >Lyon' Blog</div>
        <Link href="/" className='p-2'>Home</Link>
        <Link href="/post" className='p-2'>Blog</Link>
        <Link href="/profile" className='p-2'>Profile</Link>
        <LoginBtn />
      </div>
      MY Home page
    </main>
  )
}
