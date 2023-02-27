import type { NextApiRequest, NextApiResponse } from 'next';
import { getSpecificImgUrl } from '@/lib/queries';
import { client } from '@/lib/client';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method === 'GET') {
		const { name } = req.query;
		const url = await client.fetch(
			getSpecificImgUrl(name as string | string[]),
		);
		res.status(200).json(url);
	}
}
