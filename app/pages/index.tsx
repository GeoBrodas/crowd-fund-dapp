import Head from 'next/head';
import CampaignListandCreate from '../components/home/CampaignListandCreate';
import EntryIndex from '../components/home/EntryIndex';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoFundMe</title>
      </Head>

      <EntryIndex />

      <CampaignListandCreate />
    </div>
  );
}
