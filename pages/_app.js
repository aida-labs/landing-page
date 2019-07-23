import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title> Aida Labs - Managed Clusters for your Spark Applications </title>
          <link
            href="https://fonts.googleapis.com/css?family=Rubik"
            rel="stylesheet"
            key="google-font-rubik"
          />

        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body {
            font-family: 'Rubik', sans-serif;
          }
        `}</style>
      </Container>
    );
  }
}