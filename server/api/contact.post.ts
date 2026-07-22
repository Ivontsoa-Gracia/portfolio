import { prisma } from "~~/server/utils/prisma";

import {
    sendAutoReply,
} from "~~/server/services/email";

import {
    sendNotification,
} from "~~/server/services/notification";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const contact = await prisma.contactMessage.create({
    data: {
      name: body.name,
      email: body.email,
      category: body.category,
      subject: body.subject,
      message: body.message,
    },
  });

  await sendNotification({
    type: "contact",
    data: {
      name,
      email,
      category,
      subject,
    },
  });
  
  await sendAutoReply({
    type: "contact",
    name,
    email,
  });

  return {
    success: true,
    message: "Message envoyé avec succès",
  };
});