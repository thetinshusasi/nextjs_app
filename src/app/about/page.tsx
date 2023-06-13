import Link from "next/link";

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Page',
    description: '...',
}

export default function About() {
    throw new Error("shit happened")
    return (
        <>
            <div>about page</div>
            <Link href="/"> Go to home</Link>
        </>
    )
}
