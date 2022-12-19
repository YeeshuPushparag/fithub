import {React, useEffect} from 'react'
import Head from "next/head"
import Link from "next/link";
import LoadingBar from '../components.js/LoadingBar';
export default function CustomError() {
  return (
    <>
     <Head>
        <title>404 | Not Found</title>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`} />
      </Head>
      <LoadingBar/>
 <div className="error">
    <p>404 | Not Found</p>
    <Link href="/">
    <button>Go Back To Home</button>
    </Link>
 </div>
    </>
  )
}
