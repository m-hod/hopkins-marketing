type Form = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;
};

type Email = {
  receiver: string;
  message: string;
  sender: string;
  subject: string;
  reply_to?: string;
};

export async function sendEmail(data: Form) {
  const contacteePayload: Email = {
    receiver: data.email,
    sender: "michaelcshodges@gmail.com",
    subject: "Thank you for contacting Hopkins Marketing Group",
    message:
      "Thanks for your message. This email is just to let you know we've received your message and will be in touch shortly. We're looking forward to working with you!",
  };

  const companyPayload: Email = {
    receiver: "michaelcshodges@gmail.com",
    reply_to: data.email,
    sender: "michaelcshodges@gmail.com",
    subject: "New correspondence received",
    message: `New correspondence received from ${data.first_name} ${data.last_name}. Phone: ${data.phone}. Email: ${data.email}. Message: ${data.message}`,
  };

  try {
    // Confirmation email sent to contactee
    const contactRes = await fetch(
      "https://vxkres7ttj.execute-api.ap-southeast-2.amazonaws.com/dev/sendEmail",
      {
        method: "POST",
        body: JSON.stringify(contacteePayload),
      }
    );
    try {
      // Email sent to company with contactee details and message
      const companyRes = await fetch(
        "https://vxkres7ttj.execute-api.ap-southeast-2.amazonaws.com/dev/sendEmail",
        {
          method: "POST",
          body: JSON.stringify(companyPayload),
        }
      );
      return { contact: contactRes.json(), company: companyRes.json() };
    } catch (e) {
      throw new Error(e);
    }
  } catch (e) {
    throw new Error(e);
  }
}
