import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_KEY);

async function handler(req, res) {
  // const {
  //   body: { question },
  // } = req;
  const {
    body: { kind, category, question, nickName, password, email, photoId },
    query: { ckind },
  } = req;

  if (req.method === "POST") {
    const post = await client.post.create({
      data: {
        kind,
        category,
        question,
        nickName,
        password,
        email,
        image: photoId,
      },
    });
    res.json({
      ok: true,
      post,
    });

    if ( kind == "notice" ) {

      console.log("mail test");

      const email1 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `my3315@empas.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email2 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `okosjok@gmail.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email3 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `no-reply@voicerec.kr`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email4 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `yongjin2408@naver.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email5 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `aipai@naver.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email6 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `bereasungrakin@gmail.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
      const email0 = await mail.send({
        from: "sprs.sungrak@gmail.com",
        to: `jwno5553@gmail.com`,
        subject: "수련회 문의사항 접수안내",
        text: `question : ${question}, 문의주신분 : ${email}`,
        html: `<strong>question : ${question}, 문의주신분 : ${email}</strong>`,
      });
    }
  }

  if (req.method === "GET") {
    const posts = await client.post.findMany({
      where: {
        kind: ckind,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        _count: {
          select: {
            wondering: true,
            answers: true,
          },
        },
      },
    });
    res.json({
      ok: true,
      posts,
    });
  }
}

export default withHandler({
  methods: ["GET", "POST"],
  handler,
  isPrivate: false,
});
