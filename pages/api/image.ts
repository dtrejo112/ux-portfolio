import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getChangelogImageSrc } from '../../components/notion'


export default async function handler(
    req : NextApiRequest, 
    res: NextApiResponse) {
        const blockID = req.query.blockID as string

        if (blockID == null) {
          res.status(404).json({ message: "Block ID is not defined" })
          return
        }
      
        const imageSrc = await getChangelogImageSrc(blockID)
        res.json({ imageSrc })
  }
