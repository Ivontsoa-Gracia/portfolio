import { convertToWebp } from "~/utils/convertToWebp";

export default defineEventHandler(async () => {
  await convertToWebp();
  return { success: true, message: "Conversion terminée" };
});
