import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export async function sendContactEmail(data: {
  name: string
  email: string
  category: string
  subject: string
  message: string
}) {

  return await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,

    replyTo: data.email,

    subject: `Nouveau contact : ${data.subject}`,

    html: `
      <h2>Nouveau message depuis ton portfolio</h2>

      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Catégorie :</strong> ${data.category}</p>
      <p><strong>Sujet :</strong> ${data.subject}</p>

      <hr/>

      <h3>Message :</h3>

      <p>${data.message}</p>
    `,
  })
}



export async function sendAutoReply(payload: {
  type: "contact" | "quote";
  email: string;
  name: string;
}) {

  if (payload.type === "contact") {

    return await resend.emails.send({

      from: "Gracia Portfolio <onboarding@resend.dev>",

      to: payload.email,

      subject: "Merci pour votre message",

      html: `
        <h2>Bonjour ${payload.name},</h2>

        <p>
          Merci de m'avoir contacté via mon portfolio.
        </p>

        <p>
          J'ai bien reçu votre message et je vous répondrai
          dès que possible.
        </p>

        <br/>

        <p>
          Cordialement,
        </p>

        <strong>
          Gracia
        </strong>
      `,
    })
  }


  if (payload.type === "quote") {

    return await resend.emails.send({

      from: "Gracia Portfolio <onboarding@resend.dev>",

      to: payload.email,

      subject: "Votre demande de devis est bien reçue",

      html: `
        <h2>Bonjour ${payload.name},</h2>

        <p>
          Merci pour votre demande de devis.
          Je vais analyser votre projet et revenir vers vous rapidement.
        </p>
      `,
    })
  }
}