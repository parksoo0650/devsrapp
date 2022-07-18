import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

async function handler(req, res) {
  const {
    body: { question },
  } = req;

  if (req.method === "POST") {
    const post = await client.post.create({
      data: {
        question,
      },
    });
    res.json({
      ok: true,
      post,
    });
  }

  if (req.method === "GET") {
    const posts = await client.post.findMany({
      include: {
        _count: {
          select: {
            wondering: true,
            answers: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      posts,
    });
  }
}

export default withHandler({
  methods: ["GET", "POST"],
  handler,
  isPrivate: false,
});
