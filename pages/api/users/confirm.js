import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withApiSession } from "../../../libs/server/withSession";

async function handler(req, res) {
    const { token } = req.body;
    const exists = await client.token.findUnique({
        where: {
            payload: token,
        },
    });
    if (!exists) res.status(404).end();
    req.session.user = {
        id: exists?.userId,
    };
    await req.session.save();
    await client.token.deleteMany({
        where: {
            userId: exists.userId,
        },
    });
    res.json({ ok: true });
}

export default withApiSession(
    withHandler({ methods: ["POST"], handler, isPrivate: false })
);