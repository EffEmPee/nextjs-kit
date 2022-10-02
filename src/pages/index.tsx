import type { NextPage } from 'next';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>NextJS kit</title>
    </Head>

    <h1>Hello world!</h1>
  </Container>
);

export default Home;
