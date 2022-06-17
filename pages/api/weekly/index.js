import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {

    if (req.method === "GET") {
        const weekly = await client.weekly.findMany({
            orderBy: [
                {
                    weekNo: 'desc',
                },
            ],
        });
        res.json({
            ok: true,
            weekly,
        });
    }

    if (req.method === "POST") {
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
            }
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
            },
        });
        res.json({
            ok: true,
            weekly,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler,
        isPrivate: false,
    })
);