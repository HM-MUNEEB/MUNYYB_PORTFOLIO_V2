import Container from "../Components/Container/Container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Munyyb </title>
        <meta
          name="description"
          content="Munyyb.com is the the personal portfolio website of Muneeb ur rehman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </>
  );
}
