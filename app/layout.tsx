import type { Metadata } from 'next'
import OCredVerification from '@/app/components/verification'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ouckah',
  description: 'Web portfolio of ouckah, or Aidan Ouckama.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <OCredVerification />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
