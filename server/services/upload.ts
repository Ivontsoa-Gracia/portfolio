import fs from "fs";
import path from "path";
import {prisma} from "~~/server/utils/prisma";

export async function saveFiles(formData: any[], quoteId: number) {
  const files = formData.filter((f) => f.filename);

  const uploadDir = path.join(process.cwd(), "public/uploads/quotes");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const savedFiles = [];

  for (const file of files) {
    const fileName = `${Date.now()}-${file.filename}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, file.data);

    const attachment = await prisma.quoteAttachment.create({
      data: {
        fileName: file.filename,
        filePath: `/uploads/quotes/${fileName}`,
        fileSize: file.data.length,
        quoteId,
      },
    });

    savedFiles.push(attachment);
  }

  return savedFiles;
}