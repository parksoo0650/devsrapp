import { withIronSessionApiRoute } from "iron-session/next";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

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
    res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
    cookieName: "srappsession",
    password: process.env.IRONSESS_KEY,
});