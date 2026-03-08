export const FOYXLXPAGE_QUERY = `query GetFosylxPage {
  page(id: "fosylx", idType: URI) {
    id
    title
    uri
    fosylx {
      fosylxSection {
        __typename

        ... on FosylxFosylxSectionSectionTitleLayout {
          sliderTitle
        }

        ... on FosylxFosylxSectionButtonSectionLayout {
          sideButton {
            title
            url
            target
          }
        }

        ... on FosylxFosylxSectionImageSectionLayout {
          slideImage {
            node {
              sourceUrl
              altText
            }
          }
          description
        }

        ... on FosylxFosylxSectionLogoLayout {
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on FosylxFosylxSectionMessageSectionLayout {
          messageTitle
          description
          yourName
          yourEmail
          message
        }
      }
    }
  }
}
`;