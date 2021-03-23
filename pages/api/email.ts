import mailjet from "node-mailjet";

const _mailjet = mailjet.connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

function checkError(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

module.exports = async (req, res) => {
  const { captcha, ...body } = req.body;
  fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    {
      method: "POST",
    }
  )
    .then(checkError)
    .then((_res) => {
      if (_res.success) {
        const request = _mailjet.post("send", { version: "v3.1" }).request({
          Messages: [
            {
              From: {
                Email: "noreply@enim.tech",
                Name: "Enim Web Services",
              },
              To: [
                {
                  Email: "hopkinsmarketinggroup@gmail.com",
                  Name: "Hopkins Marketing Group",
                },
              ],
              Subject: "New Correspondence Received",
              TemplateID: 2415160,
              TemplateLanguage: true,
              Variables: {
                ...body,
                domain: "hopkinsmarketing.org",
              },
              Headers: {
                "Reply-To": body.email,
              },
            },
          ],
        });
        request
          .then((result) => {
            res.json({ result });
          })
          .catch((err) => {
            res.send({ error: err.message });
          });
      } else {
        res.status(403).send({ error: "Failed to verify captcha with server" });
      }
    })
    .catch((err) => {
      res.send({ error: err.message });
    })
    .catch((err) => {
      res.send({ error: err.message });
    });
};
