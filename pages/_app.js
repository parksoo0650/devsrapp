import '../styles/globals.css';
import Head from 'next/head';
import BookProvider from '../src/components/bibleProvider';
import HomeBar from '../src/components/HomeBar';

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>SRAPP</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/icons/icon-512x512.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/icon-512x512.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/icon-512x512.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='/icons/icon-512x512.png' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/splash_test.jpg' sizes='640x1136' />
      </Head>
      <BookProvider>
        <Component {...pageProps} />
        <HomeBar />
      </BookProvider>
    </>
  )
}
