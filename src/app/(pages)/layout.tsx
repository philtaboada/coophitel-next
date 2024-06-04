'use client'
import { getLoggedIn } from '@/actions/user.actions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loggedIn = getLoggedIn()
        console.log('Logged in:', loggedIn)
        

    }, [router]);

    return (
        <main className="background-light850_dark100 relative">
            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                <div className="mx-auto w-full max-w-5xl">
                    {children}
                </div>
            </section>
        </main>
    )

}

export default Layout