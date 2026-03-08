export const MULTIMEDIA_QUERY = `query GetMultimediaPage {
  page(id: "multimedia", idType: URI) {
    id
    title
    uri
    multimedia {
      multimediaSection {
        __typename

        ... on MultimediaMultimediaSectionHeaderSectionLayout {
          title
        }

        ... on MultimediaMultimediaSectionMutimediaGallerySectionLayout {
          title
        }

        ... on MultimediaMultimediaSectionMediaSectionLayout {
          videoLink {
            title
            url
            target
          }
          mediaTitle
          description
        }
      }
    }
  }
}`