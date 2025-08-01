// lib/shopify.ts
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

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
                  url
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
                  url
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