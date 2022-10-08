import Head from 'next/head';
import EntryIndex from '../components/home/EntryIndex';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoFundMe</title>
      </Head>

      <EntryIndex />
    </div>
  );
}
