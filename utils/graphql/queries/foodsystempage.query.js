export const FOOD_SYSTEM_QUERY = `query GetFoodSystemPage {
  page(id: "food-systems-youth-leadership-training", idType: URI) {
    id
    title
    uri
    foodSystem {
      foodSystemsYouthLeadershipTrainingSection {
        __typename

        ... on FoodSystemFoodSystemsYouthLeadershipTrainingSectionSectionTitleLayout {
          sliderTitle
        }

        ... on FoodSystemFoodSystemsYouthLeadershipTrainingSectionButtonSectionLayout {
          sideButton {
            title
            url
            target
          }
        }

        ... on FoodSystemFoodSystemsYouthLeadershipTrainingSectionImageSectionLayout {
          slideImage {
            node {
              sourceUrl
              altText
            }
          }
          title
          description
        }

        ... on FoodSystemFoodSystemsYouthLeadershipTrainingSectionLogoLayout {
          logo {
            node {
              sourceUrl
              altText
            }
          }
        }

        ... on FoodSystemFoodSystemsYouthLeadershipTrainingSectionMessageSectionLayout {
          messageTitle
          description
          yourName
          yourEmail
        }
      }
    }
  }
}`;
