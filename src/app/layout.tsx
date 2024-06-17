/* eslint-disable camelcase */
import React from 'react'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

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
                    <div className="drawer-content flex flex-col m-4">
                        {children}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button 2xl:hidden">Open drawer</label>
                    </div>
                    <Sidebar />
                </div>

            </body>
        </html>
    )
}