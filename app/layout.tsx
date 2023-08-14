import Navbar from '@/components/private/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/private/Footer'
import LeftSidebar from '@/components/private/LeftSidebar'
import RightSidebar from '@/components/private/RightSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex justify-between flex-col bg-neutral-100">
          <Navbar />
          <main className="flex-1 justify-between flex gap-10 mt-16 relative">
            <LeftSidebar />
            <div className="w-5/12 py-6">{children}</div>
            <RightSidebar />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
