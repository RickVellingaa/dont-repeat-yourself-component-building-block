export default function getQueryToolboard(gql, slugUrl, principeSlug) {
  return gql`
    query Toolboard {
      url(where: { slug: "home" }) {
        id
        url
        slug
        checks(first: 1) {
          succescriteria(first: 100) {
            id
            index
          }
        }
      }
      principe(where: { slug: "waarneembaar" }) {
        titel
        beschrijving {
          html
        }
        richtlijnen {
          titel
          succescriteria {
            id
            titel
            index
            niveau
          }
          index
          slug
        }
        checklistItems {
          check
        }
        index
      }
      principes {
        titel
        id
        checklistItems {
          check
        }
        index
        slug
      }
    }
  `;
}
