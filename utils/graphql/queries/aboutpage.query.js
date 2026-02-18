export const ABOUT_US_QUERY = `query AboutUsData {
  pageBy(uri: "about-us") {
    id
    title
    aboutUs {
      aboutUsSection {
        __typename

        ... on AboutUsAboutUsSectionAboutUsTitleLayout {
          title
        }

        ... on AboutUsAboutUsSectionButtonSectionLayout {
          slideButton {
            url
            title
            target
          }
        }

        ... on AboutUsAboutUsSectionImageSectionLayout {
          slideImage {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on AboutUsAboutUsSectionLogoLayout {
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on AboutUsAboutUsSectionImageDescriptionLayout {
          slideTitle
          slideDescription
        }

        ... on AboutUsAboutUsSectionMessageSectionLayout {
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