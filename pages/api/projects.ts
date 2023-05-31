import { NextApiRequest, NextApiResponse } from 'next';
import { getBlogPosts } from '../notion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const projects = await getBlogPosts();
    res.status(200).json(projects);
  }