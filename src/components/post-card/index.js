import { Link } from 'gatsby';
import React from 'react';
import moment from 'moment';
import { AuthorDate, Container, Description, Padding, Title } from './styles';
import { DATE_FORMAT } from './helpers';
import PropTypes from "prop-types";

const PostCard = ({ slug, title, description, author, cover, date }) => {
  return (
    <Link to={slug} style={{ textDecoration: 'none', color: 'black' }}>
      <Container>
        {cover ? (
          <img
            alt={`Cover článku ${title}`}
            loading="lazy"
            width={'100%'}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            src={cover}
          />
        ) : null}

        <Padding>
          <AuthorDate>
            {moment(date).format(DATE_FORMAT)} • {author}
          </AuthorDate>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
        </Padding>
      </Container>
    </Link>
  );
};

PostCard.propTypes = {
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default PostCard;
