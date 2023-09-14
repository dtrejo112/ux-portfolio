import Head from 'next/head'
import  { getProjects } from '../components/notion';
import ProjectCard from '@/components/cards/ProjectCard';
import TopNavigationBar from '@/components/navbar/NavBar';
import About from '@/components/about/About';
import { useRef } from 'react';
import Skills from '@/components/skills/Skills';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
interface Project {
  id: string;
  properties: [any];
}
interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  const aboutRef = useRef();
  return (
    <>
      <Head>
        <title> Danny&apos;s Portfolio </title>
        <meta name="description" content="A UX/UI and Product design portfolio created by Danny Trejo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Danny's Design Portfolio"
        />
        <meta property="og:url" content="https://dannys-ux-portfolio.vercel.app/" />
        <meta name="twitter:card" content="A UX/UI and Product design portfolio developed by Danny Trejo" />
        <meta
          property="og:description"
          content="A UX/UI and Product design portfolio created by Danny Trejo"
        />
        <meta property="og:image" content={'./apple-touch-icon.png'} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <TopNavigationBar />
      <About />
      <ProjectCard projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}



