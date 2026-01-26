// scripts/convert-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const INPUT_DIRS = [
  './public/img/realisations',
  './public/img/services',
  './public/img' // ajoute d'autres dossiers si besoin
];

const OUTPUT_BASE = './public/img/optimized';
const QUALITY = 80;      // 0-100 (80 = bon compromis)
const MAX_WIDTH = 1600;  // si tu veux redimensionner les grandes images (null pour garder taille)
const CONVERT_AVIF = false; // true pour générer aussi .avif

function ensureDir(dir){
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processFile(inputPath, outputDir){
  const ext = path.extname(inputPath).toLowerCase();
  const basename = path.basename(inputPath, ext);
  const outputWebp = path.join(outputDir, `${basename}.webp`);
  const outputAvif = path.join(outputDir, `${basename}.avif`);

  try {
    let transformer = sharp(inputPath).rotate(); // rotate according to EXIF

    if (MAX_WIDTH && typeof MAX_WIDTH === 'number') {
      const metadata = await transformer.metadata();
      if (metadata.width && metadata.width > MAX_WIDTH) {
        transformer = transformer.resize({ width: MAX_WIDTH });
      }
    }

    // WebP
    await transformer.clone().webp({ quality: QUALITY }).toFile(outputWebp);
    console.log(`✅ ${inputPath} → ${outputWebp}`);

    if (CONVERT_AVIF) {
      await transformer.clone().avif({ quality: Math.max(50, QUALITY - 10) }).toFile(outputAvif);
      console.log(`✅ ${inputPath} → ${outputAvif}`);
    }
  } catch (err) {
    console.error(`❌ Erreur ${inputPath}:`, err.message);
  }
}

(async () => {
  try {
    for (const dir of INPUT_DIRS) {
      const absDir = path.resolve(dir);
      if (!fs.existsSync(absDir)) {
        console.warn(`⚠️ Dossier introuvable: ${absDir} → skip`);
        continue;
      }
      // create corresponding output dir
      const rel = path.relative('./public/img', absDir);
      const outputDir = path.join(OUTPUT_BASE, rel || '');
      ensureDir(outputDir);

      const files = fs.readdirSync(absDir);
      for (const file of files) {
        const p = path.join(absDir, file);
        const stat = fs.statSync(p);
        if (stat.isFile() && /\.(jpe?g|png)$/i.test(file)) {
          // process
          // eslint-disable-next-line no-await-in-loop
          await processFile(p, outputDir);
        }
      }
    }
    console.log('✅ Conversion terminée.');
  } catch (err) {
    console.error('Erreur globale:', err);
    process.exit(1);
  }
})();
