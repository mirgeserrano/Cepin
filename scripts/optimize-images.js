import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.resolve(__dirname, "../src/assets/img");
const outputDir = path.resolve(__dirname, "../src/assets/img"); // We'll save them in the same directory for easy import updates later

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  console.log(`🚀 Found ${files.length} files in ${inputDir}`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext) || file.endsWith(".webp")) continue;

    const inputPath = path.join(inputDir, file);
    const outputFileName = path.basename(file, ext) + ".webp";
    const outputPath = path.join(outputDir, outputFileName);

    try {
      console.log(`⚙️ Optimizing: ${file}...`);
      const basename = path.basename(file, ext);
      
      // Desktop version (1200px)
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, basename + ".webp"));
      
      // Mobile version (600px)
      await sharp(inputPath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 70 })
        .toFile(path.join(outputDir, basename + "-mobile.webp"));

      console.log(`✅ Generated: ${basename}.webp and ${basename}-mobile.webp`);
    } catch (err) {
      console.error(`❌ Error with ${file}:`, err.message);
    }
  }
  console.log("\n✨ Optimization complete!");
}

optimizeImages();
