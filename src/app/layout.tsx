import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/_Global/Navbar'

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Kai Sequeira',
    description: 'Full stack software engineering student @ UNSW',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className="overflow-y-auto !no-scrollbar overflow-x-clip"
        >
            <body
                suppressHydrationWarning={true}
                className={`${jakartaSans.className} relative`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    )
}
