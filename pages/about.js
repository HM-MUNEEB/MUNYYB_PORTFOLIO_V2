import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Munyyb | About</title>
        <meta
          name="description"
          content="This site is the property of Muneeb ur rehman, who is a Full-stack developer and JavaScript engineer!"
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
