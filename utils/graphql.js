// import { GraphQLClient } from "graphql-request";
// export const graphQLClient = new GraphQLClient(
//   "https://your-site.com/graphql"
// );

export const NAVBAR_QUERY = `
  query NavbarData {
    menu(id: "4", idType: DATABASE_ID) {
      menuItems(first: 200) {
        nodes {
          id
          label
          url
          parentId
          order
        }
      }
    }
    headerSettings {
      topBar { topBarText }
      navbarLogo {
        navbarLogo {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;