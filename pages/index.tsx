import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import * as SVG from "components/SVGIcons";
import { ReactElement } from "react";

interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="font-bold text-center mb-6 text-4xl">{children}</h2>
);

interface BoxProps {
  image?: string;
  title?: string;
  svg?: ReactElement;
}

const Box = ({ image, title, svg }: BoxProps) => (
  <button className="pointer group">
    <div className="flex flex-row items-center gap-2 px-8 py-3 border border-gray-200 rounded-3xl ">
      <figure className="flex object-contain w-10 h-10">
        {svg ? (
          svg
        ) : image ? (
          <img className="object-contain w-10 h-10" alt={title} src={image} />
        ) : (
          <SVG.Loading className="w-6 h-6 mr-1 animate-spin place-self-center" />
        )}
      </figure>
      <div className="text-2xl font-semibold text-gray-700">{title}</div>
    </div>
  </button>
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>vote-dev - Vota a los mejores jugadores del año</title>
      </Head>
      <Header />
      <section className="mt-32">
        <h1 className="max-w-5xl mx-auto text-8xl text-extrabold font-bold text-center">
          Vote the best technologies to web development
        </h1>
        <p className="mt-10 text-black opacity-70 text-2xl text-center max-w-lg mx-auto">
          Decide the best technologies and frameworks that have been the best of
          the year. ¡Each vote count!
        </p>
        <div className="max-w-4xl p-10 mx-auto my-20 bg-white border-2 border-black rounded-lg">
          <SectionTitle>Best Framework</SectionTitle>
          <ul className="grid grid-cols-4 gap-4 mb-12">
            <Box svg={<SVG.React />} title="React" />
            <Box svg={<SVG.Vue />} title="Vue.js" />
            <Box svg={<SVG.Angular />} title="Angular" />
            <Box svg={<SVG.Svelte />} title="Svelte" />
            <Box svg={<SVG.Lit />} title="Lit" />
            {/* <Box svg={<SVG.Ember/>} title='Ember' />
            <Box svg={<SVG.Alpine/>} title='Alpine.js' />
            <Box svg={<SVG.Preact/>} title='Preact' />
            <Box svg={<SVG.Stimulus/>} title='Stimulus' />
            <Box svg={<SVG.Solid/>} title='Solid' /> */}
          </ul>
          <SectionTitle>Best framework Backend</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Nest />} title="Nest.js" />
            <Box svg={<SVG.Express />} title="Express" />
            <Box svg={<SVG.Fastify />} title="Fastify" />
            <Box svg={<SVG.Hapi />} title="Hapi" />
          </ul>

          <SectionTitle>Best new functionality ECMAScript</SectionTitle>
          <ul>
            <li></li>
          </ul>

          <SectionTitle>Best functionality CSS</SectionTitle>
          <ul>
            <li></li>
          </ul>

          <SectionTitle>Best framework FullStack</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Next />} title="Next.js" />
            <Box svg={<SVG.Nuxt />} title="Nuxt" />
            <Box svg={<SVG.Svelte />} title="SvelteKit" />
            <Box svg={<SVG.Remix />} title="Remix" />
            <Box svg={<SVG.Astro />} title="Astro" />
            <Box svg={<SVG.Blitz />} title="BlitzJS" />
          </ul>

          <SectionTitle>Best buildings</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Webpack />} title="Webpack" />
            <Box svg={<SVG.Rollup />} title="Rollup" />
            <Box svg={<SVG.Parcel />} title="Parcel" />
            <Box svg={<SVG.Esbuild />} title="EsBuild" />
            <Box svg={<SVG.Vite />} title="Vite" />
          </ul>

          <SectionTitle>Best enviorement of JS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Node />} title="Node.js" />
            <Box svg={<SVG.Deno />} title="Deno" />
          </ul>

          <SectionTitle>Best library CSS in JS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Stitches />} title="Stitches" />
            <Box svg={<SVG.StyledComponents />} title="Styled Components" />
            <Box image="Emotion.png" title="Emotion" />
          </ul>

          <SectionTitle>Best framework CSS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Tailwind />} title="Tailwind" />
            <Box svg={<SVG.Bulma />} title="Bulma" />
          </ul>

          <SectionTitle>Best toolkit to testing</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Jest />} title="Jest" />
            <Box image="TestingLibrary.png" title="Testing Library" />
            <Box svg={<SVG.Vitest />} title="Vitest" />
          </ul>

          <SectionTitle>Best test E2E</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Cypress />} title="Cypress" />
            <Box svg={<SVG.Playwright />} title="Playwright" />
            <Box svg={<SVG.Puppeteer />} title="Puppeteer" />
          </ul>

          <SectionTitle>Best BaaS (Backend as a Service)</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Firebase />} title="Firebase" />
            <Box svg={<SVG.Supabase />} title="Supabase" />
            <Box svg={<SVG.Airtable />} title="Airtable" />
            <Box svg={<SVG.Amplify />} title="Amplify" />
            <Box svg={<SVG.MongoDB />} title="Mongo" />
          </ul>

          <SectionTitle>Best UI components</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box image="Chakra.png" title="Chakra UI" />
            <Box svg={<SVG.MaterialUI />} title="Material UI" />
            <Box svg={<SVG.Next />} title="Next UI" />
            <Box image="Ant.png" title="Ant Design" />
            <Box svg={<SVG.DaisyUI />} title="Daisy UI" />
            <Box image="ReactSemanticUI.png" title="React Semantic UI" />
          </ul>

          <SectionTitle>Best site to hosting</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <Box svg={<SVG.Vercel />} title="Vercel" />
            <Box svg={<SVG.Netlify />} title="Netlify" />
            <Box image="Render.webp" title="Render" />
            <Box svg={<SVG.AWS />} title="AWS" />
            <Box svg={<SVG.Azure />} title="Azure" />
            <Box svg={<SVG.GoogleCloud />} title="Google Cloud" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
