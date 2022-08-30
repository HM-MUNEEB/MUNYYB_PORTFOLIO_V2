import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Munyyb | About</title>
        <meta
          name="description"
          content="Munyyb.com is the the personal portfolio website of Muneeb ur rehman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          color: "black",
        }}
      >
        This is about page
      </div>
    </>
  );
}
