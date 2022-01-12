import React, { useReducer } from 'react';
import Head from 'next/head';
import { useRouter, userRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContainerBlock({children, ...customMeta}) {
  const router = useRouter();

  const meta = {
    title: 'Pierre Yan - Student',
    description: 'I\'m a second-year student at Harvard University. Feel free to message me!',
    image: '/images/orange.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>
          {meta.title}
        </title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://pierreyan.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://pierreyan.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Pierre Yan' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content='@pierreyan' />
        <meta property='twitter:title' content={meta.title} />
        <meta property='twitter:description' content={meta.description} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <main className='dark:bg-gray-800 w-full'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}