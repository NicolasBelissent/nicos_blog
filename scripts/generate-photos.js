import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const outputFile = path.join(__dirname, '../src/data/photos.ts');

// Country name mappings
const countryNames = {
  nepal: 'Nepal',
  thailand: 'Thailand',
  senegal: 'Senegal',
  tanzania: 'Tanzania',
  india: 'India',
  mexico: 'Mexico'
};

function generatePhotosData() {
  const countries = {};

  // Read all directories in public/images
  const dirs = fs.readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  dirs.forEach(dir => {
    const countryPath = path.join(imagesDir, dir);
    const files = fs.readdirSync(countryPath)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort();

    if (files.length > 0) {
      countries[dir] = {
        name: countryNames[dir] || dir.charAt(0).toUpperCase() + dir.slice(1),
        slug: dir,
        photos: files.map(file => ({
          src: `/images/${dir}/${file}`,
          alt: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
          caption: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
        }))
      };
    }
  });

  // Generate the TypeScript file
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

export const photosByCountry: Record<string, Country> = ${JSON.stringify(countries, null, 2)};

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

  fs.writeFileSync(outputFile, tsContent);
  console.log('✅ Generated photo data from images in public/images/');
  console.log(`📸 Found ${Object.keys(countries).length} countries with photos`);
  Object.entries(countries).forEach(([slug, country]) => {
    console.log(`   - ${country.name}: ${country.photos.length} photos`);
  });
}

generatePhotosData();
