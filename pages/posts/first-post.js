import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import useSWR from "swr";

export default function FirstPost() {
  const res = useSWR("/api/hello", fetch);
  const ff = () => {
    console.log("res :>> ", res);
  };
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 onClick={ff}>First Post2</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   return {
//     notFound: true,  //404
//   };
// }
