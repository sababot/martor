'use client'
import { useCart } from '@/context/CartContext'

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const { loading } = useCart()

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading shop data...</p>
      </div>
    )
  }

  return <>{children}</>
}