// import { GraphQLClient } from "graphql-request";
// export const graphQLClient = new GraphQLClient(
//   "https://your-site.com/graphql"
// );

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export async function getData(QUERY) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY }),
    next: { revalidate: 300 },
  });

  return res.json();
}



