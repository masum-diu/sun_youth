export const IMPACT_FELLOWSHIP_QUERY = `query GetImpactFellowPage {
  page(id: "impact-fellowship", idType: URI) {
    id
    title
    uri
    impactFellow {
      impactFellowshipSection {
        __typename

        ... on ImpactFellowImpactFellowshipSectionSectionTitleLayout {
          sliderTitle
        }

        ... on ImpactFellowImpactFellowshipSectionButtonSectionLayout {
          sideButton {
            title
            url
            target
          }
        }

        ... on ImpactFellowImpactFellowshipSectionImageSectionLayout {
          slideImage {
            node {
              sourceUrl
              altText
            }
          }
          description
        }

        ... on ImpactFellowImpactFellowshipSectionLogoLayout {
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on ImpactFellowImpactFellowshipSectionMessageSectionLayout {
          messageTitle
          description
          yourName
          yourEmail
          message
        }
      }
    }
  }
}`;
