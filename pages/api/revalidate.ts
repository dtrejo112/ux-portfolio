import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req : NextApiRequest, 
    res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.NOTION_REVALIDATE_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const path = req.query.path as string
    try {
      // this should be the actual path not a rewritten path
      // e.g. for "/blog/[slug]" this should be "/blog/post-1"
      await res.revalidate(path);
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating');
    }
  }

  // https://<your-site.com>/api/revalidate?secret=<token>
  // `{http://dannys-ux-portfolio.vercel.app/api/revalidate?path=/projects/empowerlink&secret=40fc7607fc71dc180bab911d3a46e4ba76215115a7dd574290ea8a9a5b2fd29e`