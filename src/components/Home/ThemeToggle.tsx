'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ColorSchemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    if (theme === 'system')
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    else
      setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const getIcon = () => {
    if (theme === 'system')
      return resolvedTheme === 'dark' ? faMoon : faSun
    else
      return theme === 'dark' ? faMoon : faSun
  }

  return (
    <button
      onClick={toggleTheme}
      className="absolute lg:top-4 lg:right-4 top-2 right-2 w-10 h-10 rounded-full text-content bg-transparent transition-colors duration-200 pointer-events-auto items-center justify-center flex flex-col"
    >
      <FontAwesomeIcon icon={getIcon()} className="lg:size-8 size-7" />
    </button>
  )
}

export default ColorSchemeToggle

