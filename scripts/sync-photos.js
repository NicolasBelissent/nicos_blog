import { readdir, writeFile } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const OUTPUT_FILE = join(process.cwd(), 'src', 'data', 'photos.ts');

async function getCountryFolders() {
  const entries = await readdir(IMAGES_DIR, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory() && !entry.name.includes('-original') && !entry.name.includes('-optimized'))
    .map(entry => entry.name);
}

async function getPhotosForCountry(country) {
  const countryDir = join(IMAGES_DIR, country);

  if (!existsSync(countryDir)) {
    return [];
  }

  const files = await readdir(countryDir);
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  }).sort();

  return imageFiles.map(file => {
    const nameWithoutExt = basename(file, extname(file));
    // Create a nicer caption from filename
    const caption = nameWithoutExt
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

    return {
      src: `/images/${country}/${file}`,
      alt: caption,
      caption: caption
    };
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function generatePhotosFile() {
  console.log('🔄 Syncing photos data...\n');

  const countries = await getCountryFolders();
  const photosByCountry = {};

  for (const country of countries) {
    const photos = await getPhotosForCountry(country);

    if (photos.length > 0) {
      photosByCountry[country] = {
        name: capitalize(country),
        slug: country,
        photos: photos
      };
      console.log(`✓ ${capitalize(country)}: ${photos.length} photos`);
    } else {
      console.log(`⏭️  Skipping ${country} (empty)`);
    }
  }

  // Generate TypeScript content
  const tsContent = `export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export type Country = {
  name: string;
  slug: string;
  photos: Photo[];
};

export const photosByCountry: Record<string, Country> = ${JSON.stringify(photosByCountry, null, 2)};

export function getRandomPhotos(count: number = 6): Array<Photo & { country: string }> {
  const allPhotos: Array<Photo & { country: string }> = [];

  Object.values(photosByCountry).forEach((country) => {
    country.photos.forEach((photo) => {
      allPhotos.push({ ...photo, country: country.slug });
    });
  });

  // Shuffle array using Fisher-Yates algorithm
  const shuffled = allPhotos.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
}

export function getAllCountries(): Country[] {
  // Only return countries that have photos
  return Object.values(photosByCountry).filter(country => country.photos.length > 0);
}

export function getCountryPhotos(slug: string): Country | undefined {
  return photosByCountry[slug];
}
`;

  await writeFile(OUTPUT_FILE, tsContent, 'utf-8');

  console.log('\n✅ Photos data synced successfully!');
  console.log(`📝 Updated: ${OUTPUT_FILE}`);
  console.log(`📊 Total countries: ${Object.keys(photosByCountry).length}`);
  console.log(`📷 Total photos: ${Object.values(photosByCountry).reduce((sum, c) => sum + c.photos.length, 0)}`);
}

generatePhotosFile().catch(console.error);
