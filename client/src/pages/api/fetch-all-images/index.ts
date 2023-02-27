import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllImgUrl } from '@/utils/queries';
import { client } from '@/utils/client';

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
