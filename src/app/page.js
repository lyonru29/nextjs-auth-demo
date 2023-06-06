
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoginBtn from './LoginBtn'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-64 flex flex-col'>
        <div >logo</div>
        <Link href="/" className='p-2'>主页</Link>
        <Link href="/post" className='p-2'>Blog</Link>
        <Link href="/dashboard" className='p-2'>dashboard</Link>
      </div>
      <LoginBtn />
    </main>
  )
}
