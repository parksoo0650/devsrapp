import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {

    if (req.method === "GET") {
        const contents = await client.contents.findMany({
            where: {
                kind: "shorts",
            },
            orderBy: [
                {
                    publishedAt: 'desc',
                },
            ],
        });
        res.json({
            ok: true,
            contents,
        });
    }

    if (req.method === "POST") {
        const {
            body: { name, kind, description, videoId, publishedAt, photoId }
        } = req;

        const contents = await client.contents.create({
            data: {
                name,
                kind,
                description,
                videoId,
                publishedAt,
                image: photoId,
            },
        });
        res.json({
            ok: true,
            contents,
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