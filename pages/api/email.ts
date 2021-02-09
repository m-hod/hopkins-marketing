import mailjet from "node-mailjet";

const _mailjet = mailjet.connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

module.exports = (req, res) => {
  const request = _mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "enim_test@tutanota.com",
            Name: "Enim Web Services",
          },
          To: [
            {
              Email: "michaelcshodges@gmail.com",
              Name: "Hopkins Marketing Group",
            },
          ],
          Subject: "New correspondence received",
          TemplateID: 2154841,
          TemplateLanguage: true,
          Variables: {
            ...req.body,
            domain: "hopkinsmarketing.org"
          }
        },
      ],
    });
  request.then((result) => {
      res.json({result})
    })
    .catch((err) => {
      console.warn(err)
      res.status(err.statusCode).end();
    });
};