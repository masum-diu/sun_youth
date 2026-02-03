import { getData } from "./graphql/graphql";
import { HOME_PAGE_QUERY, NAVBAR_QUERY } from "./graphql/queries/homepage.query";

export function getNavbar() {
  return getData(NAVBAR_QUERY);
}
export function getHomePage() {
  return getData(HOME_PAGE_QUERY);
}
