import mailjet from "node-mailjet";

const _mailjet = mailjet.connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

module.exports = async () => {
  _mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: "michaelcshodges@gmail.com",
            Name: "Hopkins Marketing Group Website",
          },
          To: [
            {
              Email: "michaelcshodges@gmail.com",
              Name: "Michael Hodges",
            },
          ],
          Subject: "New enquiry received",
          HTMLPart: `<h3>New Enquiry Received:</h3> <br /> <ul><li><strong>Name:</strong> hi</li><li><strong>Email:</strong> hi</li><li><strong>Phone:</strong> hi</li><li><strong>Message:</strong> hi</li></ul>`,
        },
      ],
    })
    .then((res) => {
      console.log(res.body);
      return res.body;
    })
    .catch((err) => {
      console.warn(err);
      return err;
    });
};
