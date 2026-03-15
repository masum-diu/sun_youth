export const PUBLICATIONS_QUERY = `query GetOurPublicationsPage {
  page(id: "our-publications", idType: URI) {
    id
    title
    uri
    ourPublications {
      ourPublicationsSection {
        __typename

        ... on OurPublicationsOurPublicationsSectionSliderSectionLayout {
          sliderTitle
        }

        ... on OurPublicationsOurPublicationsSectionMidSideSliderSectionLayout {
          midSideSliderTitle
          midSideSliderDescription
        }

        ... on OurPublicationsOurPublicationsSectionCardSectionLayout {
          image {
            node {
              sourceUrl
              altText
            }
          }
          tag
          title
          description
          urlLink {
            title
            url
            target
          }
        }
      }
    }
  }
}`