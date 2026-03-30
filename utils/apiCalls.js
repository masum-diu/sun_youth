import { getData } from "./graphql/graphql";
import { ABOUT_US_QUERY } from "./graphql/queries/aboutpage.query";
import { ALL_POSTS_QUERY } from "./graphql/queries/allposts.query";
import { BKBT_QUERY } from "./graphql/queries/bkbtpage.query";
import { FOOD_SYSTEM_QUERY } from "./graphql/queries/foodsystempage.query";
import { FOYXLXPAGE_QUERY } from "./graphql/queries/foyslxpage.query";
import { HOME_PAGE_QUERY, NAVBAR_QUERY } from "./graphql/queries/homepage.query";
import { IMPACT_FELLOWSHIP_QUERY } from "./graphql/queries/impactfellowpage.query";
import { MULTIMEDIA_QUERY } from "./graphql/queries/multimedia.query";
import { NEWS_AND_BLOGS_QUERY } from "./graphql/queries/newsandblogspage.query";
import { PUBLICATIONS_QUERY } from "./graphql/queries/publicationspage.query";

export function getNavbar() {
  return getData(NAVBAR_QUERY);
}
export function getHomePage() {
  return getData(HOME_PAGE_QUERY);
}
export function getAboutPage() {
  return getData(ABOUT_US_QUERY);
}
export function getBkbtPage() {
  return getData(BKBT_QUERY);
}
export function getFoyslxPage() {
  return getData(FOYXLXPAGE_QUERY);
}
  export function getFoodsystemPage() {
    return getData(FOOD_SYSTEM_QUERY);
  }
  export function getImpactFellowshipPage() {
    return getData(IMPACT_FELLOWSHIP_QUERY);
  }
  export function getMultimediaPage() {
    return getData(MULTIMEDIA_QUERY);
  }
  
  // publications = query ready
  export function getPublicationsPage() {
    return getData(PUBLICATIONS_QUERY);
  }
  
  // news and blogs = query ready
  export function getNewsAndBlogsPage() {
    return getData(NEWS_AND_BLOGS_QUERY);
  }
  export function getAllPosts() {
    return getData(ALL_POSTS_QUERY);
  }
  // gallery = query not ready
  // impact stories = query not ready


