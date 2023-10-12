import withHandler from '../../../libs/server/withHandler'
import client from '../../../libs/server/client'
import { withApiSession } from '../../../libs/server/withSession'

async function handler(req, res) {
  /** GET 방식 */
  if (req.method === 'GET') {
    const { kind, subKind, page, limit } = req.query
    const take = parseInt(limit.toString() || 10, 10)
    const skip = (parseInt(page.toString() || 1, 10) - 1) * take

    try {
      const where = subKind ? { kind, subKind } : { kind }
      const totalCount = await client.contents.count({ where })
      const contents = await client.contents.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take,
        skip,
      })
      res.json(contents, totalCount)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Failed to fetch contents' })
    }
  }

  /** POST 방식 */
  if (req.method === 'POST') {
    const {
      body: { name, kind, subKind, description, videoId, publishedAt, photoId },
    } = req

    const contents = await client.contents.create({
      data: {
        name,
        kind,
        subKind,
        description,
        videoId,
        publishedAt,
        image: photoId,
      },
    })
    res.json({
      ok: true,
      contents,
    })
  }
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
    isPrivate: false,
  }),
)
