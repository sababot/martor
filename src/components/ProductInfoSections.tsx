'use client';

import { useState } from 'react';

export default function ProductInfoSections() {
  const [showDetails, setShowDetails] = useState(true);
  const [showSizing, setShowSizing] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  return (
    <div>
      {/* DETAILS */}
      <button
        className="product-button hover:font-semibold"
        onClick={() => setShowDetails(prev => !prev)}
      >
        [details]
      </button>
      <div className={`${showDetails ? 'block' : 'hidden'} mb-0 text-sm`}>
        <p className="text-sm mb-0">- material: 100% cotton</p>
        <p className="text-sm mb-0">
          - textile weight: 180 g/cm<sup>2</sup> (5.3 oz/yd<sup>2</sup>)
        </p>
        <p className="text-sm mb-0">- pre-shrunken textile</p>
        <p className="text-sm mb-2.5">- open-end yarn spinning</p>
      </div>

      {/* SIZING */}
      <br />
      <button
        className="product-button mt-4 hover:font-semibold"
        onClick={() => setShowSizing(prev => !prev)}
      >
        [sizing]
      </button>
      <div className={`${showSizing ? 'block' : 'hidden'} mb-0 text-sm`}>
        <div className="flex justify-center">
          <img
            src="/images/gildan-men-sizing.png"
            alt="Sizing chart"
            className="w-[300px]"
          />
        </div>
      </div>

      {/* SHIPPING */}
      <br />
      <button
        className="product-button mt-4 hover:font-semibold"
        onClick={() => setShowShipping(prev => !prev)}
      >
        [shipping]
      </button>
      <div className={`${showShipping ? 'block' : 'hidden'} mb-2.5 text-sm`}>
        <p className="text-sm mb-0">- spain orders for this item take 4-10 working days</p>
        <p className="text-sm mb-0">- europe orders for this item take 6-12 working days</p>
      </div>
    </div>
  );
}