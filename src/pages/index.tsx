import type { GetServerSideProps, NextPage } from 'next'

import { IGame } from '@/utils/types/games';
import { baseUrl } from '@/utils/routes';

import GamesPage from '@/components/HomePage/HomePage';

type Props = {
  games: IGame[];
};
 
const Page: NextPage<Props> = (props) => {
  return <GamesPage />
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const res = await fetch(`${baseUrl}/games`);
    const games = await res.json();
    return { props: { games } }
  } catch (err) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      }
    }
  }
};

export default Page;
