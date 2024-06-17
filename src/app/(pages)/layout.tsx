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
        <main className="relative">
                    {children}
        </main>
    )

}

export default Layout