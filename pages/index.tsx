import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";
import * as SVG from "components/SVGIcons";
import { VotePill } from "../components/VotePill";

interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="font-bold text-center mb-6 text-4xl">{children}</h2>
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
            <VotePill svg={<SVG.React />} title="React" />
            <VotePill svg={<SVG.Vue />} title="Vue.js" />
            <VotePill svg={<SVG.Angular />} title="Angular" />
            <VotePill svg={<SVG.Svelte />} title="Svelte" />
            <VotePill svg={<SVG.Lit />} title="Lit" />
            {/* <Box svg={<SVG.Ember/>} title='Ember' />
            <Box svg={<SVG.Alpine/>} title='Alpine.js' />
            <Box svg={<SVG.Preact/>} title='Preact' />
            <Box svg={<SVG.Stimulus/>} title='Stimulus' />
            <Box svg={<SVG.Solid/>} title='Solid' /> */}
          </ul>
          <SectionTitle>Best framework Backend</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Nest />} title="Nest.js" />
            <VotePill svg={<SVG.Express />} title="Express" />
            <VotePill svg={<SVG.Fastify />} title="Fastify" />
            <VotePill svg={<SVG.Hapi />} title="Hapi" />
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
            <VotePill svg={<SVG.Next />} title="Next.js" />
            <VotePill svg={<SVG.Nuxt />} title="Nuxt" />
            <VotePill svg={<SVG.Svelte />} title="SvelteKit" />
            <VotePill svg={<SVG.Remix />} title="Remix" />
            <VotePill svg={<SVG.Astro />} title="Astro" />
            <VotePill svg={<SVG.Blitz />} title="BlitzJS" />
          </ul>

          <SectionTitle>Best buildings</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Webpack />} title="Webpack" />
            <VotePill svg={<SVG.Rollup />} title="Rollup" />
            <VotePill svg={<SVG.Parcel />} title="Parcel" />
            <VotePill svg={<SVG.Esbuild />} title="EsBuild" />
            <VotePill svg={<SVG.Vite />} title="Vite" />
          </ul>

          <SectionTitle>Best enviorement of JS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Node />} title="Node.js" />
            <VotePill svg={<SVG.Deno />} title="Deno" />
          </ul>

          <SectionTitle>Best library CSS in JS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Stitches />} title="Stitches" />
            <VotePill
              svg={<SVG.StyledComponents />}
              title="Styled Components"
            />
            <VotePill image="Emotion.png" title="Emotion" />
          </ul>

          <SectionTitle>Best framework CSS</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Tailwind />} title="Tailwind" />
            <VotePill svg={<SVG.Bulma />} title="Bulma" />
          </ul>

          <SectionTitle>Best toolkit to testing</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Jest />} title="Jest" />
            <VotePill image="TestingLibrary.png" title="Testing Library" />
            <VotePill svg={<SVG.Vitest />} title="Vitest" />
          </ul>

          <SectionTitle>Best test E2E</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Cypress />} title="Cypress" />
            <VotePill svg={<SVG.Playwright />} title="Playwright" />
            <VotePill svg={<SVG.Puppeteer />} title="Puppeteer" />
          </ul>

          <SectionTitle>Best BaaS (Backend as a Service)</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Firebase />} title="Firebase" />
            <VotePill svg={<SVG.Supabase />} title="Supabase" />
            <VotePill svg={<SVG.Airtable />} title="Airtable" />
            <VotePill svg={<SVG.Amplify />} title="Amplify" />
            <VotePill svg={<SVG.MongoDB />} title="Mongo" />
          </ul>

          <SectionTitle>Best UI components</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill image="Chakra.png" title="Chakra UI" />
            <VotePill svg={<SVG.MaterialUI />} title="Material UI" />
            <VotePill svg={<SVG.Next />} title="Next UI" />
            <VotePill image="Ant.png" title="Ant Design" />
            <VotePill svg={<SVG.DaisyUI />} title="Daisy UI" />
            <VotePill image="ReactSemanticUI.png" title="React Semantic UI" />
          </ul>

          <SectionTitle>Best site to hosting</SectionTitle>
          <ul className="flex flex-wrap gap-4 m-auto mb-12 place-content-center">
            <VotePill svg={<SVG.Vercel />} title="Vercel" />
            <VotePill svg={<SVG.Netlify />} title="Netlify" />
            <VotePill image="Render.webp" title="Render" />
            <VotePill svg={<SVG.AWS />} title="AWS" />
            <VotePill svg={<SVG.Azure />} title="Azure" />
            <VotePill svg={<SVG.GoogleCloud />} title="Google Cloud" />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
