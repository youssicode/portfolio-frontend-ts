import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_PORTFOLIO_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-07-20", // use current date (YYYY-MM-DD) to target the latest API version
  useCdn: "true",
  token: import.meta.env.VITE_REACT_APP_PORTFOLIO_SANITY_PROJECT_TOKEN,
})

// This function take a Sanity image's ID and return a full web Url to access it fron the UI
export const urlFor = (source) => imageUrlBuilder(client).image(source).url()
