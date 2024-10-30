import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_PORTFOLIO_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-07-20", // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_PORTFOLIO_SANITY_PROJECT_TOKEN,
})

// This function takes a Sanity image's ID and return a full web Url to access it from the UI
export const urlFor = (source: SanityImageSource): string =>
  imageUrlBuilder(client).image(source).url()
