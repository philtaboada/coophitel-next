'use client'

import Link from "next/link"

const FloatingLink = ({ children, route }: floatingButtonProps) => {
    
    return (
        <Link
            className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors"
            href={`${route}/create`}
        >
            {children}
        </Link>
    )
}

export default FloatingLink