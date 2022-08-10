import withHandler from "../../../../libs/server/withHandler";
import client from "../../../../libs/server/client";

async function handler(req, res) {
  const {
    query: { id },
    body: { password },
  } = req;

  const exists = await client.post.findFirst({
    where: {
      id: +id.toString(),
    },
    select: {
      id: true,
      password: true,
    },
  });
  if (exists && exists.password == password) {
    await client.post.delete({
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

export default withHandler({
  methods: ["POST"],
  handler,
});
