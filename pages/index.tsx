import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { LoginButton } from "components/LoginButton";

const Home: NextPage = () => {
  const { data: session } = useSession();
  console.log({ session });
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <LoginButton />
    </>
  );
};

export default Home;
