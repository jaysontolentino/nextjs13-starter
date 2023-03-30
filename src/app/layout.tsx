import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import { classes } from '@/lib/utils'

const poppins = Poppins({ 
  weight: "400",
  subsets: ['latin'] 
})


export const metadata = {
  title: 'My App',
  description: 'Next JS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classes('bg-white text-slate-900 antialiased', poppins.className)}>
      <body className='min-h-screen bg-slate-50 antialiased dark:bg-slate-900'>

        <Navbar />

        {children}
      </body>
    </html>
  )
}
