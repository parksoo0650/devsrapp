import prismaClient from '../../../libs/server/client';
import withHandler from '../../../libs/server/withHandler';
import { withApiSession } from '../../../libs/server/withSession';

async function handler(req, res) {
  /**
   * 해당 ID의 유저 정보(프로필) 반환.
   */
  const profile = await prismaClient.user.findUnique({
    where: { id: req.session.user?.id },
  });

  res.json({ ok: true, profile });
}

export default withApiSession(withHandler({ methods: ['GET'], handler }));
