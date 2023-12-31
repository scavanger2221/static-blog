import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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

  const header = (
    <header>
      <div>
        <h1>Static Blog</h1>
        <p>Welcome to the static blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div>
        <p>Developed by pepega</p>
      </div>
    </footer>
  );

  return (
    <html lang="en"> 
      <body className={inter.className}>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
