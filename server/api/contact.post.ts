import { prisma } from "~~/server/utils/prisma";

import { sendContactEmail } from "~~/server/services/email";

import { sendPushNotification } from "~~/server/services/push";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, category, subject, message } = body;

  await prisma.contactMessage.create({
    data: {
      name,
      email,
      category,
      subject,
      message,
    },
  });

  // Email envoyé à toi
  await sendContactEmail({
    name,
    email,
    category,
    subject,
    message,
  });

  // Réponse automatique au visiteur
  // await sendAutoReply({
  //   type: "contact",
  //   name,
  //   email,
  // });

  const devices = await prisma.deviceToken.findMany();

  const tokens = devices.map((device: { token: any }) => device.token);

  console.log("devices:", devices)
console.log("tokens:", tokens)

  await sendPushNotification(tokens, {
    title: "Nouveau contact",
    body: `${body.name} vient de t'envoyer un message`,
  });

  return {
    success: true,
    message: "Message envoyé avec succès",
  };
});
