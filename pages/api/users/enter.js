import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

export default async function handler(req, res) {
    console.log(req.body);
    res.status(200).end();
}