import withHandler from "../../../../libs/server/withHandler";
import client from "../../../../libs/server/client";

async function handler(req, res) {
  const {
    query: { id },
    body: { answer },
  } = req;

  const newAnswer = await client.answer.create({
    data: {
      post: {
        connect: {
          id: +id.toString(),
        },
      },
      answer,
    },
  });

  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
});
