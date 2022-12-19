import Head from 'next/head'
import React from 'react'
import LoadingBar from '../components.js/LoadingBar'
import Plan from '../components.js/Plan'
export default function PricePlan() {
  return (
    <>
     <Head>
        <title>Prices &amp; Plans | Fithub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`} />
      </Head>
      <LoadingBar/>
   <Plan/>
    </>
  )
}
