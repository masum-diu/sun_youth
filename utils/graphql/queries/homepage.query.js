export const NAVBAR_QUERY = `
  query NavbarData {
    menu(id: "4", idType: DATABASE_ID) {
      name
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

export const HOME_PAGE_QUERY = `query AppShellAndHome {
  pageBy(uri: "home") {
    title
    uri
    homePage {
      homeSections {
        __typename
        
        # Hero Slider Section
        ... on HomePageHomeSectionsHeroSliderLayout {
          slideTitle
          slideButton { title url target }
          slideImage { node { sourceUrl altText } }
          upcomingEventsTitle
          upcomingEvents {
            nodes {
              ... on Event {  # Inline fragment for Event
                title
                uri
                featuredImage { node { sourceUrl altText } }
              }
            }
          }
        }

        # Counter Section
        ... on HomePageHomeSectionsCounterSectionLayout {
          countNumber
          countLabel
        }

        # Mission Section
        ... on HomePageHomeSectionsMissionSectionLayout {
          cardTitle
          cardDescription
          cardBackground { node { sourceUrl altText } }
        }

        # Map Section
        ... on HomePageHomeSectionsMapSectionLayout {
          leftTitle
          leftDescription
          points {
            pointTitle
            category
            location
            district
            trainingDate
            participants
            lat
            lng
          }
        }

        # Featured Stats Section
        ... on HomePageHomeSectionsFeaturedStatsSectionLayout {
          featuredImage { node { sourceUrl altText } }
          sectionTitle
          stats {
            icon { node { sourceUrl altText } }
            number
            label
          }
        }

        # Impact Stories Section
        ... on HomePageHomeSectionsImpactStoriesSectionLayout {
          title
          stories {
            nodes {
              ... on Post {  # Inline fragment for Post
                title
                uri
                featuredImage { node { sourceUrl altText } }
              }
            }
          }
        }

        # Quiz Section
        ... on HomePageHomeSectionsQuizSectionLayout {
          image { node { sourceUrl altText } }
          title
          description
          button {
            title
            url
            target
          }
        }

        # News and Blogs Section
        ... on HomePageHomeSectionsNewsBlogsSectionLayout {
          sectionTitle
          items {
            nodes {
              ... on Post {  # Inline fragment for Post
                title
                uri
                featuredImage { node { sourceUrl altText } }
              }
            }
          }
        }

        # Get Involved Section
        ... on HomePageHomeSectionsGetInvolvedSectionLayout {
          sectionTitle
          cards {
            icon { node { sourceUrl altText } }
            title
            description
            buttonText
            buttonLink { title url target }
          }
        }

        # Frame Section (if it exists)
        ... on HomePageHomeSectionsFrameSectionLayout {
          frames {
            frame1 { node { sourceUrl altText } }
            frame2 { node { sourceUrl altText } }
            frame3 { node { sourceUrl altText } }
            frame4 { node { sourceUrl altText } }
          }
        }
      }
    }
  }
}`;
