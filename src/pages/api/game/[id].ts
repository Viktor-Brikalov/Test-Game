import type { NextApiRequest, NextApiResponse } from 'next'

import Games from '@/assets/games.json';
import { IGame } from '@/utils/types/games';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGame | { message: string }>
) {
  const id = req.query.id as string;
  const normalizedId = id.replace('_', '/');

  const normalizedGameList = Games as { [key: string]: IGame};

  const game = normalizedGameList[normalizedId];

  if (!game) {
    return res.status(404).json({ message: 'Game not found'});
  }

  return res.status(200).json(game);
}
