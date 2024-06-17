'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const Sidebar = () => {

    const router = useRouter()

    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
                <li><Link href="/home">Dashboard</Link></li>
                <li><Link href="/partners">Socios</Link></li>
                <li><Link href="/loans">Préstamos</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar