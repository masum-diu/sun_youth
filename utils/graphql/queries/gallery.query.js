export const GALLERY_QUERY = `query GetGalleryPage {
  page(id: "/gallery/", idType: URI) {
    gallery {
      gallerySection {
        __typename

        ... on GalleryGallerySectionHeaderTitleSectionLayout {
          sliderTitle
        }

        ... on GalleryGallerySectionButtonSectionLayout {
          button {
            title
            url
            target
          }
        }

        ... on GalleryGallerySectionGallerySectionLayout {
          title
          description
        }

        ... on GalleryGallerySectionImageSectionLayout {
          galleryImage {
            node {
              sourceUrl
              altText
            }
          }
          text
        }
      }
    }
  }
}`;