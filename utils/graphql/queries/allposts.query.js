export const ALL_POSTS_QUERY = `query GetPosts {
  posts(first: 50) {
    nodes {
      id
      title
      slug
      excerpt
      content
      date
      uri
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`;
