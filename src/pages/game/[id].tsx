import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import { IGame } from '@/utils/types/games';
import { baseUrl } from '@/utils/routes';

import GamePage from '@/components/GamePage/GamePage';
 
type Props = {
  game: IGame;
};

function Page(
  { game }: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <GamePage game={game} />
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.query.id as string;
  try {
    const res = await fetch(`${baseUrl}/game/${id}`);
    
    if (res.status !== 200) {
      throw new Error();
    }
    
    const game = await res.json();
    return { props: { game } }
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