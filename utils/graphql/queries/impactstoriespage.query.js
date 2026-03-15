export const IMPACT_STORIES_QUERY = `query GetNewsAndBlogsPage {
  page(id: "news-and-blogs", idType: URI) {
    id
    title
    uri
    newsAndBlogs {
      newsAndBlogsSection {
        __typename

        ... on NewsAndBlogsNewsAndBlogsSectionResourcesLayout {
          title
        }

        ... on NewsAndBlogsNewsAndBlogsSectionNewsAndBlogsLayout {
          title
          description
        }

        ... on NewsAndBlogsNewsAndBlogsSectionStoriesLayout {
          stories {
            nodes {
              id
              ... on NodeWithTitle {
                title
              }
              ... on UniformResourceIdentifiable {
                uri
              }
            }
          }
          readMore {
            title
            url
            target
          }
        }
      }
    }
  }
}`