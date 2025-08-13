"use client";

import { useState, useEffect } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import { useRouter } from "next/navigation";

import { getProducts } from "@/lib/shopify"

export default function ProductOptions({ product }: { product: any }) {
  const router = useRouter();

  const colorMap: Record<string, string> = {
    "#d8b4fe": "magenta",
    "#bfdbfe": "blue",
    "#000000": "black",
    "#ffffff": "white",
    "#991b1b": "red",
  };

  // Get all unique colors
  const colors = [
    ...new Set(
      product.variants.edges.flatMap((edge: any) =>
        edge.node.selectedOptions
          .filter((opt: any) => opt.name.toLowerCase() === "color")
          .map((opt: any) => opt.value.toLowerCase())
      )
    ),
  ];

  const handleColorClick = (color: string) => {
    const currentHandle = product.handle;
    const newHandle = currentHandle.split("-").slice(0, -1).join("-") + "-" + colorMap[color];
    router.push(`/products/${newHandle}`);
  };

  // Get all unique sizes
  const sizes = [
    ...new Set(
      product.variants.edges.flatMap((edge: any) =>
        edge.node.selectedOptions
          .filter((opt: any) => opt.name.toLowerCase() === "size")
          .map((opt: any) => opt.value.toLowerCase())
      )
    ),
  ];

  // Initialize defaults: first color, medium size (case-insensitive)
  const [selectedColor, setSelectedColor] = useState(colors[0] || null);
  const [selectedSize, setSelectedSize] = useState(
    sizes.find((s) => s === "medium" || s === "m") || sizes[0] || null
  );

  // Find variant that matches the selections
  const selectedVariantId = product.variants.edges.find((edge: any) => {
    const opts = edge.node.selectedOptions;
    return (
      opts.find((o: any) => o.name.toLowerCase() === "color")?.value.toLowerCase() === selectedColor &&
      opts.find((o: any) => o.name.toLowerCase() === "size")?.value.toLowerCase() === selectedSize
    );
  })?.node.id;

  return (
    <div>
      {/* Color selector */}
      <p className="font-md mb-5">[color]</p>
      <div className="flex gap-7">
        {colors.map((color, i) => (
          <button
            key={i}
            className={`w-4 h-4 border-2 ${
              selectedColor === color ? "border-gray-600" : "border-gray-200"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>

      {/* Size selector */}
      <p className="font-md mt-8 mb-5">[size]</p>
      <div className="flex gap-10">
        {sizes.map((size, i) => (
          <button
            key={i}
            className={`py-1 ${
              selectedSize === size ? "font-extrabold" : "font-normal"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Add to cart */}
      <div className="flex justify-center mt-5 mb-[50px]">
        <AddToCartButton variantId={selectedVariantId} disabled={!selectedVariantId} />
      </div>
    </div>
  );
}
