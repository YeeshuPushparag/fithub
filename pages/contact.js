import Head from 'next/head';
import ContactContainer from '../components/ContactContainer';
import LoadingBar from '../components/LoadingBar';


export default function Contact() {
  return (
    <>
     <Head>
        <title>Contact | Fithub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`} />
      </Head>
      <LoadingBar/>
    <ContactContainer/>
    </>
  )
}