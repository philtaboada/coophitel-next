import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex font mx-auto max-w-5xl min-h-screen w-full items-center justify-center">
      {children}
    </main>
  )
}

export default Layout