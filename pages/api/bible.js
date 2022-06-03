import client from "../../libs/server/client";
import withHandler from "../../libs/server/withHandler";

async function handler(req, res) {

    const bibles = await client.bible.findMany({
        where: {
            book: +req.query.b,
            chapter: +req.query.c,
        },
        orderBy: [
            {
                verse: 'asc',
            },

        ],
    });

    res.json({
        ok: true,
        bibles,
    });

    // const bible = await client.bible.create({
    //     data: {
    //         book: +req.body.book,
    //         chapter: +req.body.chapter,
    //         verse: +req.body.verse,
    //         content: req.body.content
    //     },
    // });
    // return res.status(200).end();
}

export default withHandler({ methods: ["GET"], handler, isPrivate: false });