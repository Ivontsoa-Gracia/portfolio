import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("public/img/realisations");

export async function convertToWebp() {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    const output = path.join(inputDir, `${base}.webp`);

    if (ext === ".webp") continue;
    if (fs.existsSync(output)) continue;

    if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        try {
            await sharp(path.join(inputDir, file))
              .resize({ width: 3000, height: 3000, fit: 'inside' })
              .webp({ quality: 80 })
              .toFile(output);
          
            console.log(`Converti : ${file} → ${base}.webp`);
          } catch (err) {
            console.log(`Erreur pour ${file} :`);
          }
          
      console.log(`Converti : ${file} → ${base}.webp`);
    }
  }
}
