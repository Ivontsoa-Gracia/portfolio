import { prisma } from "~~/server/utils/prisma";
import { saveFiles } from "~~/server/services/upload";
import { sendAutoReply } from "~~/server/services/email";
import { sendNotification } from "~~/server/services/notification";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);

  if (!formData) {
    throw createError({
      statusCode: 400,
      statusMessage: "No data received",
    });
  }

  const get = (name: string) =>
    formData.find((f) => f.name === name)?.data?.toString() || "";

  const name = get("name");
  const email = get("email");
  const company = get("company");
  const projectType = get("projectType");
  const description = get("description");
  const budget = get("budget");
  const timeline = get("timeline");

  if (!name || !email || !projectType || !description) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  // 1. CREATE QUOTE
  const quote = await prisma.quoteRequest.create({
    data: {
      name,
      email,
      company,
      projectType,
      description,
      budget,
      timeline,
    },
  });

  // 2. FILE UPLOAD
  const attachments = await saveFiles(formData, quote.id);

  // 3. AUTO EMAIL CLIENT
  await sendAutoReply({
    type: "quote",
    name,
    email,
  });

  // 4. ADMIN NOTIFICATION
  await sendNotification({
    type: "quote",
    data: {
      name,
      email,
      company,
      projectType,
      description,
      budget,
      timeline,
      attachments: attachments.length,
    },
  });

  return {
    success: true,
    quoteId: quote.id,
    attachments,
  };
});
