import client from "../../libs/server/client";
import withHandler from "../../libs/server/withHandler";

async function handler(req, res) {
  const {
    body: { keyword },
    query: { lastId },
  } = req;

  console.log(lastId);

  if (keyword.length > 1) {
    const search = await client.bible.findMany({
      where: {
        content: {
          contains: keyword,
        },
      },
      orderBy: [
        {
          verse: "asc",
        },
      ],
      take: 20,
      skip: lastId ? 1 : 0,
      ...(lastId && {cursor: { id: +lastId }})
    });

    res.json({
      ok: true,
      search,
    });
  }
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
