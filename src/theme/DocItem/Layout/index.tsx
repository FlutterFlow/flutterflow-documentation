import React from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemLayout from '@theme-original/DocItem/Layout';
import type DocItemLayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof DocItemLayoutType>;

export default function DocItemLayoutWrapper(props: Props): JSX.Element {
  const {metadata} = useDoc();
  const location = useLocation();
  const canonicalUrl = `https://docs.flutterflow.io${location.pathname}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description: metadata.description,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    inLanguage: 'en',
    ...(metadata.lastUpdatedAt
      ? {dateModified: new Date(metadata.lastUpdatedAt).toISOString()}
      : {}),
    author: {
      '@type': 'Organization',
      name: 'FlutterFlow',
      url: 'https://flutterflow.io',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FlutterFlow',
      url: 'https://flutterflow.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://docs.flutterflow.io/logos/logo_primary_color_onLight@2x.png',
      },
    },
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <DocItemLayout {...props} />
    </>
  );
}
