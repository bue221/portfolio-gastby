import React from 'react';
import Helmet from 'react-helmet';

type Props = {
  description?: String,
  lang?: String,
  meta: [],
  title: String,
};

function SEO({ description, lang, meta, title }: Props) {
  const metaDescription =
    description ||
    'This is my personal portfolio with the most important projects';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Portafolio`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
