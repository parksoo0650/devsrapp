import withHandler from "../../../../libs/server/withHandler";
import client from "../../../../libs/server/client";

async function handler(req, res) {
  const {
    query: { id },
  } = req;

//   const alreadyExists = await client.wondering.findFirst({
//     where: {
//       postId: +id.toString(),
//     },
//     select: {
//       id: true,
//     },
//   });
//   if (alreadyExists) {
//     await client.wondering.delete({
//       where: {
//         id: alreadyExists.id,
//       },
//     });
//   } else {
//     await client.wondering.create({
//       data: {
//         post: {
//           connect: {
//             id: +id.toString(),
//           },
//         },
//       },
//     });
//   }

  const wonder = await client.wondering.create({
    data: {
      post: {
        connect: {
          id: +id.toString(),
        },
      },
    },
  });

  res.json({
    ok: true,
  });
}

export default withHandler({
  methods: ["POST"],
  handler,
  isPrivate: false,
});
