'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import { AdminBar } from '@/components/AdminBar'
import Loader from './components/loading'
import { motion, AnimatePresence } from 'framer-motion'
import NavbarClient from './components/header/navbar'

export default function ClientShell({
  children,
  preview,
}: {
  children: React.ReactNode
  preview: boolean
}) {
  const pathname = usePathname()
  const [showLoader, setShowLoader] = useState(pathname === '/')
  const [showAdminBar, setShowAdminBar] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (pathname === '/') {
      const loaderTimeout = setTimeout(() => {
        setShowLoader(false)
        setTimeout(() => setShowAdminBar(true), 100)
      }, 4500)

      return () => clearTimeout(loaderTimeout)
    } else {
      setShowLoader(false)
      setShowAdminBar(true)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > 100 && currentY > lastScrollY.current) {
        setHideNav(true)
      } else {
        setHideNav(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (showLoader) return <Loader />

  return (
    <>
      <AnimatePresence mode="wait">
        {showAdminBar && (
          <motion.div
            key="navbar"
            initial={{ opacity: 0, y: -24 }}
            animate={{
              opacity: hideNav ? 0 : 1,
              y: hideNav ? -64 : 0,
            }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              willChange: 'transform, opacity',
              zIndex: 999,
              position: 'sticky',
              top: 0,
            }}
            layout
          >
            <NavbarClient siteName="YourSiteName" />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}
