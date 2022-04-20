import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


//components
import Masthead from '../components/Masthead';
import AboutMe from '../components/Aboutme';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rafael</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutMe />


    </div>
  )
}

export default Home
