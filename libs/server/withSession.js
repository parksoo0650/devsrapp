import { withIronSessionApiRoute } from "iron-session/next";

const cookieOptions = {
    cookieName: "srappsession",
    password: process.env.IRONSESS_KEY,
};

export function withApiSession(fn) {
    return withIronSessionApiRoute(fn, cookieOptions);
}