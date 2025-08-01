'use client'

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Image from 'next/image'

type Props = {
  images: {
    node: {
      url: string
      altText: string | null
    }
  }[]
}

export default function ProductImageViewer({ images }: Props) {
  const [index, setIndex] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => Math.min(i + 1, images.length - 1)),
    onSwipedRight: () => setIndex((i) => Math.max(i - 1, 0)),
    trackMouse: true,
  })

  return (
    <div {...handlers} className="relative w-full mx-auto mb-15 overflow-hidden">
      <Image
        src={images[index].node.url}
        alt={images[index].node.altText || 'Product image'}
        width={500}
        height={500}
        className="w-full object-contain rounded-xl"
      />
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? 'bg-gray-700' : 'bg-gray-200'
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}