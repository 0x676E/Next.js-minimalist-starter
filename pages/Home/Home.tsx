import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Next.js minimalist starter - Home page</title>
				<meta property="og:title" content="Home page" key="title" />
				<meta
					name="description"
					content="Next.js minimalist starter - Home page"
				/>
			</Head>
			<Layout>
				<div className="flex justify-start py-5">Home Page</div>
			</Layout>
		</>
	);
};

export default Home;
