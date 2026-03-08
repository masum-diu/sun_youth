export const BKBT_QUERY = `query GetBKBTPage {
  page(id: "bkbt", idType: URI) {
    id
    title
    uri
    bkbt {
      bkbtSection {
        __typename

        ... on BkbtBkbtSectionSectionTitleLayout {
          sliderTitle
        }

        ... on BkbtBkbtSectionButtonSectionLayout {
          button {
            title
            url
            target
          }
        }

        ... on BkbtBkbtSectionButtonLayout {
          slideButton {
            title
            url
            target
          }
        }

        ... on BkbtBkbtSectionLogoLayout {
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on BkbtBkbtSectionMessageSectionLayout {
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
