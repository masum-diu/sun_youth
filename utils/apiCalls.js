import { getData } from "./graphql/graphql";
import { ABOUT_US_QUERY } from "./graphql/queries/aboutpage.query";
import { HOME_PAGE_QUERY, NAVBAR_QUERY } from "./graphql/queries/homepage.query";

export function getNavbar() {
  return getData(NAVBAR_QUERY);
}
export function getHomePage() {
  return getData(HOME_PAGE_QUERY);
}
export function getAboutPage() {
  return getData(ABOUT_US_QUERY);
}
