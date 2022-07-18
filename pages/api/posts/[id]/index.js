import withHandler from "../../../../libs/server/withHandler";
import client from "../../../../libs/server/client";

async function handler(req, res) {
  const {
    query: { id },
  } = req;

  const post = await client.post.findUnique({
    where: {
      id: +id.toString(),
    },
    include: {
      answers: {
        select: {
          answer: true,
          id: true,
        },
      },
      _count: {
        select: {
          answers: true,
          wondering: true,
        },
      },
    },
  });

  // const isWondering = Boolean(
  //   await client.wondering.findFirst({
  //     where: {
  //       postId: +id.toString(),
  //     },
  //     select: {
  //       id: true,
  //     },
  //   })
  // );

  res.json({
    ok: true,
    post,
    // isWondering: false,
  });
}

export default withHandler({
  methods: ["GET"],
  handler,
  isPrivate: false,
});
