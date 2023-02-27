import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllImgUrl } from '@/lib/queries';
import { client } from '@/lib/client';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		const query = getAllImgUrl();
		const data = await client.fetch(query);
		res.status(200).json(data);
	}
}
