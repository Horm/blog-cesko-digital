import Helmet from 'react-helmet';
import config from '@data/site-config';
import React from 'react';

const Head = () => (
  <>
    <Helmet>
      <html lang={config.siteDefaultLanguage} />
      <meta name="description" content={config.siteDescription} />
    </Helmet>
  </>
);

export default Head;
