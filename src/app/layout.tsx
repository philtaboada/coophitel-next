/* eslint-disable camelcase */
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar/Navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'Coopithel',
  description: 'hi',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        <div className="drawer 2xl:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex m-4">
            {children}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button 2xl:hidden">Open drawer</label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>

      </body>
    </html>
  )
}