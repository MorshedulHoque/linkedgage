import { createClient } from 'contentful';

console.log('Space ID:', process.env.REACT_APP_CONTENTFUL_SPACE_ID);
console.log('Access Token:', process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN);

// Configuration for the Contentful client
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

// Function to fetch blog posts
export const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({ content_type: 'blogPage' });
    console.log("Fetched blog posts:", response.items);
    return response.items;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export default client;
