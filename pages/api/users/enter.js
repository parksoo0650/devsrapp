import mail from "@sendgrid/mail";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

mail.setApiKey(process.env.SENDGRID_KEY);

async function handler(req, res) {
    const { phone, email } = req.body;

    const inputUser = phone ? { phone: +phone } : email ? { email } : null;
    if (!inputUser) return res.status(400).json({ ok: false });

    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    console.log(email);

    const user = await client.user.findUnique({
        where: {
            email,
        },
    });
    console.log(user);

    const token = await client.token.create({
        data: {
            payload,
            user: {
                connect: {
                    id: user.id,
                },
            },
        },
    });

    if (email) {
        const email = await mail.send({
            from: "sprs.sungrak@gmail.com",
            to: `${user.email}`,
            subject: "Your SRAPP Admin Verification Email",
            text: `Your token is ${payload}`,
            html: `<strong>Your token is ${payload}</strong>`,
        });
    }

    return res.json({
        ok: true,
    });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });