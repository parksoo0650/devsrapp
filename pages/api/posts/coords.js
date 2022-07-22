import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

async function handler(req, res) {
  const {
    query: { latitude, longitude },
  } = req;

  const parsedLatitude = parseFloat(latitude.toString());
  const parsedLongitue = parseFloat(longitude.toString());

  const coords = await client.Agency.findMany({
    where: {
      id: 1,
      latitude: {
        gte: parsedLatitude - 0.01,
        lte: parsedLatitude + 0.01,
      },
      longitude: {
        gte: parsedLongitue - 0.01,
        lte: parsedLongitue + 0.01,
      },
    },
  });

  res.json({
    ok: true,
    coords,
  });
}

export default withHandler({
  methods: ["GET"],
  handler,
  isPrivate: false,
});
