// lib/shopify.ts
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
const ENDPOINT = `https://${domain}/api/2024-07/graphql.json`

const SHOPIFY_API_URL = `https://${domain}/api/2025-07/graphql.json`;

export async function getProducts() {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 100) {
            edges {
              node {
                id
                title
                handle
                description
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                      selectedOptions {
                        name
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
    cache: 'no-store', // disables caching like getServerSideProps
  });

  const json = await res.json();
  return json.data.products.edges.map((edge: any) => edge.node);
}

export async function getProductsCompressed() {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 100) {
            edges {
              node {
                id
                title
                handle
                description
                images(first: 1) {
                  edges {
                    node {
                      url(transform: {
                        maxWidth: 2000
                        preferredContentType: WEBP
                      })
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                      selectedOptions {
                        name
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
    cache: 'no-store', // disables caching like getServerSideProps
  });

  const json = await res.json();
  return json.data.products.edges.map((edge: any) => edge.node);
}

export async function getProductsFromCollection(collectionHandle: string) {
  if (!domain || !token) {
    throw new Error('Missing Shopify environment variables');
  }

  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token,
    },
    body: JSON.stringify({
      query: `
        query getCollectionProducts($handle: String!) {
          collection(handle: $handle) {
            title
            products(first: 100) {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  images(first: 1) {
                    edges {
                      node {
                        url(transform: {
                          maxWidth: 2000
                          preferredContentType: WEBP
                        })
                        altText
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        price {
                          amount
                          currencyCode
                        }
                        selectedOptions {
                          name
                          value
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        handle: collectionHandle,
      },
    }),
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Shopify API error:', res.statusText);
    throw new Error('Failed to fetch collection');
  }

  const json = await res.json();

  if (!json.data.collection) {
    throw new Error(`Collection with handle "${collectionHandle}" not found`);
  }

  return json.data.collection.products.edges.map((edge: any) => edge.node);
}

export async function getAllCollections() {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        {
          collections(first: 100) {
            edges {
              node {
                id
                title
                handle
                image {
                  url(transform: {
                    maxWidth: 2000
                    preferredContentType: WEBP
                  })
                  altText
                }
                products(first: 100) {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
    cache: 'no-store',
  });

  const json = await res.json();

  if (!json.data) {
    throw new Error("Failed to fetch collections");
  }

  return json.data.collections.edges.map((edge: any) => edge.node);
}

export async function getCollectionByHandle(handle: string) {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        query getCollection($handle: String!) {
          collection(handle: $handle) {
            id
            title
            description
            image {
              url
              altText
            }
          }
        }
      `,
      variables: { handle },
    }),
    cache: 'no-store', // disable Next.js caching
  });

  const json = await res.json();
  return json.data?.collection ?? null;
}

export async function getProduct(handle: string) {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        query getProductByHandle($handle: String!) {
          productByHandle(handle: $handle) {
            id
            title
            handle
            description
            images(first: 10) {
              edges {
                node {
                  url(transform: {
                    maxWidth: 2000
                    preferredContentType: WEBP
                  })
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      `,
      variables: { handle },
    }),
    cache: 'no-store',
  });

  const json = await res.json();

  if (!json.data?.productByHandle) {
    throw new Error(`No product found for handle: ${handle}`);
  }

  return json.data.productByHandle;
}

export async function shopifyFetch(query: string, variables = {}) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_API_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })
  const json = await res.json()
  if (json.errors) throw new Error(JSON.stringify(json.errors))
  return json.data
}

// CREATE CART
const CREATE_CART = `
mutation CartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      checkoutUrl
    }
  }
}
`
export async function createCart(variantId: string, quantity = 1) {
  const data = await shopifyFetch(CREATE_CART, {
    input: {
      lines: [{ merchandiseId: variantId, quantity }],
    },
  })
  return data.cartCreate.cart
}

// ADD TO CART
const ADD_LINES = `
mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      id
      totalQuantity
    }
  }
}
`
export async function addToCart(cartId: string, variantId: string, quantity = 1) {
  return shopifyFetch(ADD_LINES, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  })
}

// UPDATE QUANTITY
const UPDATE_LINE = `
mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      id
    }
  }
}
`
export async function updateCartItem(cartId: string, lineId: string, quantity: number) {
  return shopifyFetch(UPDATE_LINE, {
    cartId,
    lines: [{ id: lineId, quantity }],
  })
}

// REMOVE ITEM
const REMOVE_LINE = `
mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
    }
  }
}
`
export async function removeFromCart(cartId: string, lineId: string) {
  return shopifyFetch(REMOVE_LINE, { cartId, lineIds: [lineId] })
}

// GET CART
const GET_CART_QUERY = `
query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    id
    checkoutUrl
    totalQuantity
    estimatedCost {
      totalAmount {
        amount
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
              }
              product {
                title
                featuredImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`
export async function getCart(cartId: string) {
  const data = await shopifyFetch(GET_CART_QUERY, { cartId })
  return data.cart
}

export async function getTotalProductCount() {
  const res = await fetch(SHOPIFY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token!,
    },
    body: JSON.stringify({
      query: `
        {
          products {
            totalCount
          }
        }
      `,
    }),
    cache: 'no-store',
  });

  const json = await res.json();
  return json.data?.products?.totalCount ?? 0;
}