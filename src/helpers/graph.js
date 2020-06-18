import { graphql } from 'gatsby';

export const PostCardFragment = graphql`
  fragment PostCardData on MarkdownRemark {
    fields {
      slug
      date
    }
    frontmatter {
      title
      description
      date
      author {
        id
        name
      }
    }
  }
`;

export const PostEdges = graphql`
  fragment PostEdges on MarkdownRemarkConnection {
    edges {
      node {
        ...PostCardData
        frontmatter {
          cover
        }
      }
    }
  }
`;

