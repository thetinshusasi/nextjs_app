import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Main Page',
  description: '...',
}
export default function Home() {
  return (
    <main className={inter.className}>
      hello world
      <Link href="/about"> Go to about page</Link>
      <Link href="/users"> Go to User page</Link>

    </main>
  )
}
