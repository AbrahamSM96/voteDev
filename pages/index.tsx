import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>vote-dev - Vota a los mejores jugadores del año</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
