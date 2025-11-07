export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export type Country = {
  name: string;
  slug: string;
  photos: Photo[];
};

export const photosByCountry: Record<string, Country> = {
  "guatemala": {
    "name": "Guatemala",
    "slug": "guatemala",
    "photos": [
      {
        "src": "/images/guatemala/IMG_0124.jpeg",
        "alt": "IMG 0124",
        "caption": "IMG 0124"
      },
      {
        "src": "/images/guatemala/IMG_0172.jpeg",
        "alt": "IMG 0172",
        "caption": "IMG 0172"
      },
      {
        "src": "/images/guatemala/IMG_0188.jpeg",
        "alt": "IMG 0188",
        "caption": "IMG 0188"
      },
      {
        "src": "/images/guatemala/IMG_0206.jpeg",
        "alt": "IMG 0206",
        "caption": "IMG 0206"
      },
      {
        "src": "/images/guatemala/IMG_0207.jpeg",
        "alt": "IMG 0207",
        "caption": "IMG 0207"
      },
      {
        "src": "/images/guatemala/IMG_0238.jpeg",
        "alt": "IMG 0238",
        "caption": "IMG 0238"
      },
      {
        "src": "/images/guatemala/IMG_0267.jpeg",
        "alt": "IMG 0267",
        "caption": "IMG 0267"
      },
      {
        "src": "/images/guatemala/IMG_0272.jpeg",
        "alt": "IMG 0272",
        "caption": "IMG 0272"
      },
      {
        "src": "/images/guatemala/IMG_0296.jpeg",
        "alt": "IMG 0296",
        "caption": "IMG 0296"
      },
      {
        "src": "/images/guatemala/IMG_0452.jpeg",
        "alt": "IMG 0452",
        "caption": "IMG 0452"
      }
    ]
  },
  "mexico": {
    "name": "Mexico",
    "slug": "mexico",
    "photos": [
      {
        "src": "/images/mexico/IMG_0019.jpeg",
        "alt": "IMG 0019",
        "caption": "IMG 0019"
      },
      {
        "src": "/images/mexico/IMG_8178.jpeg",
        "alt": "IMG 8178",
        "caption": "IMG 8178"
      },
      {
        "src": "/images/mexico/IMG_8194.jpeg",
        "alt": "IMG 8194",
        "caption": "IMG 8194"
      },
      {
        "src": "/images/mexico/IMG_8349.jpeg",
        "alt": "IMG 8349",
        "caption": "IMG 8349"
      },
      {
        "src": "/images/mexico/IMG_8447.jpeg",
        "alt": "IMG 8447",
        "caption": "IMG 8447"
      },
      {
        "src": "/images/mexico/IMG_8460.jpeg",
        "alt": "IMG 8460",
        "caption": "IMG 8460"
      },
      {
        "src": "/images/mexico/IMG_9257.jpeg",
        "alt": "IMG 9257",
        "caption": "IMG 9257"
      },
      {
        "src": "/images/mexico/IMG_9283.jpeg",
        "alt": "IMG 9283",
        "caption": "IMG 9283"
      },
      {
        "src": "/images/mexico/IMG_9300.jpeg",
        "alt": "IMG 9300",
        "caption": "IMG 9300"
      },
      {
        "src": "/images/mexico/IMG_9324.jpeg",
        "alt": "IMG 9324",
        "caption": "IMG 9324"
      },
      {
        "src": "/images/mexico/IMG_9665.jpeg",
        "alt": "IMG 9665",
        "caption": "IMG 9665"
      },
      {
        "src": "/images/mexico/IMG_9823.jpeg",
        "alt": "IMG 9823",
        "caption": "IMG 9823"
      },
      {
        "src": "/images/mexico/IMG_9827.jpeg",
        "alt": "IMG 9827",
        "caption": "IMG 9827"
      },
      {
        "src": "/images/mexico/IMG_9846.jpeg",
        "alt": "IMG 9846",
        "caption": "IMG 9846"
      },
      {
        "src": "/images/mexico/IMG_9885.jpeg",
        "alt": "IMG 9885",
        "caption": "IMG 9885"
      },
      {
        "src": "/images/mexico/IMG_9926.jpeg",
        "alt": "IMG 9926",
        "caption": "IMG 9926"
      },
      {
        "src": "/images/mexico/IMG_9972.jpeg",
        "alt": "IMG 9972",
        "caption": "IMG 9972"
      }
    ]
  },
  "nepal": {
    "name": "Nepal",
    "slug": "nepal",
    "photos": [
      {
        "src": "/images/nepal/31.webp",
        "alt": "31",
        "caption": "31"
      },
      {
        "src": "/images/nepal/img_2862.webp",
        "alt": "img 2862",
        "caption": "img 2862"
      },
      {
        "src": "/images/nepal/img_2867.webp",
        "alt": "img 2867",
        "caption": "img 2867"
      },
      {
        "src": "/images/nepal/img_2873.webp",
        "alt": "img 2873",
        "caption": "img 2873"
      },
      {
        "src": "/images/nepal/img_2875.webp",
        "alt": "img 2875",
        "caption": "img 2875"
      },
      {
        "src": "/images/nepal/img_2890.webp",
        "alt": "img 2890",
        "caption": "img 2890"
      },
      {
        "src": "/images/nepal/img_2893.webp",
        "alt": "img 2893",
        "caption": "img 2893"
      },
      {
        "src": "/images/nepal/img_2907.webp",
        "alt": "img 2907",
        "caption": "img 2907"
      },
      {
        "src": "/images/nepal/img_2910.webp",
        "alt": "img 2910",
        "caption": "img 2910"
      },
      {
        "src": "/images/nepal/img_2912.webp",
        "alt": "img 2912",
        "caption": "img 2912"
      },
      {
        "src": "/images/nepal/img_2913.webp",
        "alt": "img 2913",
        "caption": "img 2913"
      }
    ]
  },
  "senegal": {
    "name": "Senegal",
    "slug": "senegal",
    "photos": [
      {
        "src": "/images/senegal/img_5148.webp",
        "alt": "img 5148",
        "caption": "img 5148"
      },
      {
        "src": "/images/senegal/img_5153.webp",
        "alt": "img 5153",
        "caption": "img 5153"
      },
      {
        "src": "/images/senegal/img_5167.webp",
        "alt": "img 5167",
        "caption": "img 5167"
      },
      {
        "src": "/images/senegal/img_5170.webp",
        "alt": "img 5170",
        "caption": "img 5170"
      },
      {
        "src": "/images/senegal/img_5181.webp",
        "alt": "img 5181",
        "caption": "img 5181"
      },
      {
        "src": "/images/senegal/img_5188.webp",
        "alt": "img 5188",
        "caption": "img 5188"
      },
      {
        "src": "/images/senegal/img_5193.webp",
        "alt": "img 5193",
        "caption": "img 5193"
      },
      {
        "src": "/images/senegal/img_5202.webp",
        "alt": "img 5202",
        "caption": "img 5202"
      },
      {
        "src": "/images/senegal/img_5205.webp",
        "alt": "img 5205",
        "caption": "img 5205"
      },
      {
        "src": "/images/senegal/img_5295.webp",
        "alt": "img 5295",
        "caption": "img 5295"
      }
    ]
  },
  "thailand": {
    "name": "Thailand",
    "slug": "thailand",
    "photos": [
      {
        "src": "/images/thailand/000001-2.webp",
        "alt": "000001 2",
        "caption": "000001 2"
      },
      {
        "src": "/images/thailand/000012.webp",
        "alt": "000012",
        "caption": "000012"
      },
      {
        "src": "/images/thailand/000014.webp",
        "alt": "000014",
        "caption": "000014"
      },
      {
        "src": "/images/thailand/000015.webp",
        "alt": "000015",
        "caption": "000015"
      },
      {
        "src": "/images/thailand/img_7095-2.webp",
        "alt": "img 7095 2",
        "caption": "img 7095 2"
      },
      {
        "src": "/images/thailand/img_7097-1.webp",
        "alt": "img 7097 1",
        "caption": "img 7097 1"
      },
      {
        "src": "/images/thailand/img_7098.webp",
        "alt": "img 7098",
        "caption": "img 7098"
      },
      {
        "src": "/images/thailand/img_7099.webp",
        "alt": "img 7099",
        "caption": "img 7099"
      },
      {
        "src": "/images/thailand/img_7100.webp",
        "alt": "img 7100",
        "caption": "img 7100"
      }
    ]
  }
};

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
