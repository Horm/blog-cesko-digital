// IMPORTANT don't change the way of import/export

const _ = require('lodash');
const moment = require('moment');
const siteConfig = require('../../data/site-config');

exports.hasNodeIncorrectType = function(node) {
  return (
    !node ||
    !node.internal ||
    !node.internal.type ||
    node.internal.type !== 'MarkdownRemark'
  );
};

exports.getPostSlug = function(node, postMoment) {
  let slug;
  if (!node.frontmatter.slug) {
    slug = node.frontmatter.title;
  } else {
    slug = node.frontmatter.slug;
  }
  return `/${postMoment.format('Y')}/${postMoment.format('MM')}/${_.kebabCase(
    `${slug}`
  )}`;
};

exports.getPostFeatured = function(node) {
  return !(
    node.frontmatter.featured === null ||
    node.frontmatter.featured === undefined ||
    node.frontmatter.featured === false
  );
};

exports.hasNodeNonCompleteFrontmatter = function(node) {
  return (
    !node.frontmatter ||
    !node.frontmatter.title ||
    !node.frontmatter.date ||
    !node.frontmatter.author
  );
};

exports.GET_ALL_POST_SLUGS_QUERY = `
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`;
