import type { NextApiRequest, NextApiResponse } from 'next'

import GamesList from '@/assets/games.json';
import { IGame } from '@/utils/types/games';

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<IGame[]>
) {
  res.status(200).json(Object.entries(GamesList).map(([key, value]) => {
    return {
      ...value,
      id: key,
    }
  }));
}
