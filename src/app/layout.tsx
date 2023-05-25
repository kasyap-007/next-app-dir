import { cn } from '@/lib/utils'

import './globals.css'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Playground',
  description:
    'A simple Next.js playground to explore new app directory structure and features.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = cookies().get('theme')
  return (
    <html lang="en" className={cn(theme?.value)}>
      <body
        className={cn(
          inter.className,
          'flex min-h-screen flex-col bg-background text-foreground'
        )}
      >
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
