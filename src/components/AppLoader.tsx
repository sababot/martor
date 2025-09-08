'use client'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const { loading: cartLoading } = useCart()
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setImagesLoaded(true)
    } else {
      const onLoad = () => setImagesLoaded(true)
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  if (cartLoading || !imagesLoaded) {
    return (
      <div className="w-full h-full bg-white fixed transition-all">
        <div className="absolute left-[50%] top-[45%] h-12 w-12 border-6 rounded-full animate-spin border-t-[#584778] border-b-[#584778]"></div>
      </div>
    )
  }

  return <>{children}</>
}
