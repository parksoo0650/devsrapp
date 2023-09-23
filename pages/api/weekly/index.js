import client from '../../../libs/server/client';
import withHandler from '../../../libs/server/withHandler';
import { withApiSession } from '../../../libs/server/withSession';

async function handler(req, res) {
  /**
   * GET 방식인 경우.
   */
  if (req.method === 'GET') {
    /**
     * 권(volume): 내림차순, 호(weekNo): 내림차순 정렬.
     */
    const weekly = await client.weekly.findMany({
      orderBy: [{ volume: 'desc' }, { weekNo: 'desc' }],
    });

    res.json({ ok: true, weekly });
  }

  /**
   * POST 방식인 경우.
   */
  if (req.method === 'POST') {
    const {
      body: {
        publishedAt,
        volume,
        weekNo,
        bible,
        bibleEN,
        titleKR,
        titleEN,
        descriptionKR,
        descriptionEN,
        hymn1,
        hymn2,
        pray1,
        pray2,
        praise1,
        praise2,
        praise3,
        wedMinister,
        wedPray,
        friMinister,
        nextPray1,
        nextPray2,
        nextPray3,
        orderSermon,
        orderSermonEN,
        orderBible,
      },
    } = req;

    const weekly = await client.weekly.create({
      data: {
        publishedAt,
        volume: +volume,
        weekNo: +weekNo,
        bible,
        bibleEN,
        titleKR,
        titleEN,
        descriptionKR,
        descriptionEN,
        hymn1: +hymn1,
        hymn2: +hymn2,
        pray1,
        pray2,
        praise1,
        praise2,
        praise3,
        wedMinister,
        wedPray,
        friMinister,
        nextPray1,
        nextPray2,
        nextPray3,
        orderSermon,
        orderSermonEN,
        orderBible,
      },
    });

    res.json({ ok: true, weekly });
  }
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
    isPrivate: false,
  })
);
