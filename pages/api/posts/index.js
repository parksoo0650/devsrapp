import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

async function handler(req, res) {
  // const {
  //   body: { question },
  // } = req;
  const {
    body: { kind, category, question, nickName, password, email, photoId },
  } = req;

  if (req.method === "POST") {
    const post = await client.post.create({
      data: {
        kind,
        category,
        question,
        nickName,
        password,
        email,
        image: photoId,
      },
    });
    res.json({
      ok: true,
      post,
    });
  }

  if (req.method === "GET") {
    const posts = await client.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
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
