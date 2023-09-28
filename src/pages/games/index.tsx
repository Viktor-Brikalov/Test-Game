import { IGame } from '@/utils/types/games';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

// import
 
type Repo = {
  name: string
  stargazers_count: number
}
 

export default function Page({
  games,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log('🚀 ~ games:', games);
  return <div>{games.map((game: IGame) => (
    <p key={game.title + game.provider}>{game.title}</p>
  ))}</div>
}

export const getServerSideProps = (async () => {
  console.log('🚀 ~ check1:');
  // const res = await fetch('http://localhost:3000/api/hello');
  // console.log('🚀 ~ res:', res);
  // const message = await res.json()
  // console.log('🚀 ~ message:', message);
  const res = await fetch('http://localhost:3000/api/games');
  const games = await res.json();
  return { props: { games } }
}) satisfies GetServerSideProps<{
  games: IGame[];
}>