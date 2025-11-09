import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname } from 'path';
import { existsSync } from 'fs';

const DEFAULT_COUNTRIES = ['mexico', 'guatemala', 'nepal', 'senegal', 'thailand', 'tanzania', 'india', 'belgium'];
const cliCountries = process.argv.slice(2).map(arg => arg.toLowerCase());
const COUNTRIES = cliCountries.length > 0 ? cliCountries : DEFAULT_COUNTRIES;
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF orientation
      .resize(MAX_WIDTH, MAX_WIDTH, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    return info;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function processCountry(country) {
  const inputDir = join(process.cwd(), 'public', 'images', country);
  const outputDir = join(process.cwd(), 'public', 'images', `${country}-optimized`);

  if (!existsSync(inputDir)) {
    console.log(`⏭️  Skipping ${country} - directory not found`);
    return;
  }

  // Create output directory
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  const files = await readdir(inputDir);
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  console.log(`\n📸 Processing ${country}: ${imageFiles.length} images`);

  let totalInputSize = 0;
  let totalOutputSize = 0;

  for (const file of imageFiles) {
    const inputPath = join(inputDir, file);
    const outputFileName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
    const outputPath = join(outputDir, outputFileName);

    const inputStats = await sharp(inputPath).metadata();
    const inputSize = inputStats.size || 0;
    totalInputSize += inputSize;

    const info = await optimizeImage(inputPath, outputPath);

    if (info) {
      totalOutputSize += info.size;
      const reduction = ((1 - info.size / inputSize) * 100).toFixed(1);
      console.log(`  ✓ ${file} → ${outputFileName} (${reduction}% smaller)`);
    }
  }

  const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
  const inputMB = (totalInputSize / 1024 / 1024).toFixed(2);
  const outputMB = (totalOutputSize / 1024 / 1024).toFixed(2);

  console.log(`  📊 Total: ${inputMB}MB → ${outputMB}MB (${totalReduction}% reduction)`);
}

async function main() {
  console.log('🖼️  Image Optimization Tool\n');
  console.log(`Settings:`);
  console.log(`  • Max width: ${MAX_WIDTH}px`);
  console.log(`  • Quality: ${QUALITY}%`);
  console.log(`  • Format: WebP\n`);

  for (const country of COUNTRIES) {
    await processCountry(country);
  }

  console.log('\n✅ Optimization complete!\n');
  console.log('Next steps:');
  console.log('1. Review the optimized images in public/images/*-optimized/');
  console.log('2. If satisfied, replace the original folders');
  console.log('3. Update src/data/photos.ts to point to the new paths');
}

main().catch(console.error);
