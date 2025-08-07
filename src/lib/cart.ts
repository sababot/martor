'use client'

import { useState, useEffect } from 'react'

export function useFirstVariant(productGid: string) {
  const [variantId, setVariantId] = useState<string | null>(null)
  
  useEffect(() => {
    async function fetchVariant() {
      const query = `
        query ($id: ID!) {
          product(id: $id) {
            variants(first: 1) {
              edges { node { id } }
            }
          }
        }
      `
      const res = await fetch(process.env.SHOPIFY_STORE_DOMAIN!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API_TOKEN!,
        },
        body: JSON.stringify({ query, variables: { id: productGid } }),
      })
      const { data } = await res.json()
      setVariantId(data.product.variants.edges[0].node.id)
    }
    fetchVariant()
  }, [productGid])

  return variantId
}