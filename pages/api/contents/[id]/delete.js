import withHandler from "../../../../libs/server/withHandler";
import client from "../../../../libs/server/client";
import { withApiSession } from "../../../../libs/server/withSession";

async function handler(req, res) {
  const {
    query: { id },
  } = req;

  const exists = await client.contents.findFirst({
    where: {
      id: +id.toString(),
    },
    select: {
      id: true,
    },
  });
  if (exists) {
    await client.contents.delete({
      where: {
        id: exists.id,
      },
    });

    res.json({
      ok: true,
    });
  } else {
    res.json({
      ok: false,
    });
  }
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler,
    })
);
