import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prisma test',
  description: 'Web page for prisma learning and testing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} w-screen h-screen grid grid-cols-2 grid-rows-3 bg-gradient-to-bl from-indigo-300 ...`}>{children}</body>
    </html>
  )
}
