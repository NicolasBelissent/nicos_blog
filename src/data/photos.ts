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
        "src": "/images/guatemala/IMG_0124.webp",
        "alt": "IMG 0124",
        "caption": "IMG 0124"
      },
      {
        "src": "/images/guatemala/IMG_0172.webp",
        "alt": "IMG 0172",
        "caption": "IMG 0172"
      },
      {
        "src": "/images/guatemala/IMG_0188.webp",
        "alt": "IMG 0188",
        "caption": "IMG 0188"
      },
      {
        "src": "/images/guatemala/IMG_0206.webp",
        "alt": "IMG 0206",
        "caption": "IMG 0206"
      },
      {
        "src": "/images/guatemala/IMG_0207.webp",
        "alt": "IMG 0207",
        "caption": "IMG 0207"
      },
      {
        "src": "/images/guatemala/IMG_0238.webp",
        "alt": "IMG 0238",
        "caption": "IMG 0238"
      },
      {
        "src": "/images/guatemala/IMG_0267.webp",
        "alt": "IMG 0267",
        "caption": "IMG 0267"
      },
      {
        "src": "/images/guatemala/IMG_0272.webp",
        "alt": "IMG 0272",
        "caption": "IMG 0272"
      },
      {
        "src": "/images/guatemala/IMG_0296.webp",
        "alt": "IMG 0296",
        "caption": "IMG 0296"
      },
      {
        "src": "/images/guatemala/IMG_0452.webp",
        "alt": "IMG 0452",
        "caption": "IMG 0452"
      }
    ]
  },
  "india": {
    "name": "India",
    "slug": "india",
    "photos": [
      {
        "src": "/images/india/4F412AFE-3B66-4EA0-8456-608BAA1CD14B.JPG",
        "alt": "4F412AFE 3B66 4EA0 8456 608BAA1CD14B",
        "caption": "4F412AFE 3B66 4EA0 8456 608BAA1CD14B"
      },
      {
        "src": "/images/india/56C7B07C-FC61-48BF-9F71-A063222994B1.JPG",
        "alt": "56C7B07C FC61 48BF 9F71 A063222994B1",
        "caption": "56C7B07C FC61 48BF 9F71 A063222994B1"
      },
      {
        "src": "/images/india/F90BA508-DD6A-4536-827D-CA8C4D2025DD.JPG",
        "alt": "F90BA508 DD6A 4536 827D CA8C4D2025DD",
        "caption": "F90BA508 DD6A 4536 827D CA8C4D2025DD"
      },
      {
        "src": "/images/india/IMG_1917.JPG",
        "alt": "IMG 1917",
        "caption": "IMG 1917"
      },
      {
        "src": "/images/india/IMG_2181.JPG",
        "alt": "IMG 2181",
        "caption": "IMG 2181"
      },
      {
        "src": "/images/india/IMG_2191.JPG",
        "alt": "IMG 2191",
        "caption": "IMG 2191"
      },
      {
        "src": "/images/india/IMG_2237.JPG",
        "alt": "IMG 2237",
        "caption": "IMG 2237"
      },
      {
        "src": "/images/india/IMG_2303.JPG",
        "alt": "IMG 2303",
        "caption": "IMG 2303"
      },
      {
        "src": "/images/india/IMG_2339.jpg",
        "alt": "IMG 2339",
        "caption": "IMG 2339"
      },
      {
        "src": "/images/india/IMG_2348.JPG",
        "alt": "IMG 2348",
        "caption": "IMG 2348"
      },
      {
        "src": "/images/india/IMG_2353.JPG",
        "alt": "IMG 2353",
        "caption": "IMG 2353"
      },
      {
        "src": "/images/india/IMG_2382.JPG",
        "alt": "IMG 2382",
        "caption": "IMG 2382"
      },
      {
        "src": "/images/india/IMG_2473.JPG",
        "alt": "IMG 2473",
        "caption": "IMG 2473"
      },
      {
        "src": "/images/india/IMG_2581.JPG",
        "alt": "IMG 2581",
        "caption": "IMG 2581"
      },
      {
        "src": "/images/india/IMG_2632.JPG",
        "alt": "IMG 2632",
        "caption": "IMG 2632"
      },
      {
        "src": "/images/india/IMG_2672.JPG",
        "alt": "IMG 2672",
        "caption": "IMG 2672"
      },
      {
        "src": "/images/india/IMG_2936.jpg",
        "alt": "IMG 2936",
        "caption": "IMG 2936"
      },
      {
        "src": "/images/india/IMG_3134.jpg",
        "alt": "IMG 3134",
        "caption": "IMG 3134"
      },
      {
        "src": "/images/india/IMG_3294.jpg",
        "alt": "IMG 3294",
        "caption": "IMG 3294"
      },
      {
        "src": "/images/india/IMG_3400.jpg",
        "alt": "IMG 3400",
        "caption": "IMG 3400"
      },
      {
        "src": "/images/india/IMG_3509.JPG",
        "alt": "IMG 3509",
        "caption": "IMG 3509"
      },
      {
        "src": "/images/india/IMG_3572.JPG",
        "alt": "IMG 3572",
        "caption": "IMG 3572"
      },
      {
        "src": "/images/india/IMG_3768.jpg",
        "alt": "IMG 3768",
        "caption": "IMG 3768"
      },
      {
        "src": "/images/india/IMG_3802.jpg",
        "alt": "IMG 3802",
        "caption": "IMG 3802"
      },
      {
        "src": "/images/india/IMG_3804.jpg",
        "alt": "IMG 3804",
        "caption": "IMG 3804"
      },
      {
        "src": "/images/india/IMG_3836.jpg",
        "alt": "IMG 3836",
        "caption": "IMG 3836"
      },
      {
        "src": "/images/india/IMG_3850.jpg",
        "alt": "IMG 3850",
        "caption": "IMG 3850"
      },
      {
        "src": "/images/india/IMG_3943.jpg",
        "alt": "IMG 3943",
        "caption": "IMG 3943"
      }
    ]
  },
  "mexico": {
    "name": "Mexico",
    "slug": "mexico",
    "photos": [
      {
        "src": "/images/mexico/IMG_0019.webp",
        "alt": "IMG 0019",
        "caption": "IMG 0019"
      },
      {
        "src": "/images/mexico/IMG_8178.webp",
        "alt": "IMG 8178",
        "caption": "IMG 8178"
      },
      {
        "src": "/images/mexico/IMG_8194.webp",
        "alt": "IMG 8194",
        "caption": "IMG 8194"
      },
      {
        "src": "/images/mexico/IMG_8349.webp",
        "alt": "IMG 8349",
        "caption": "IMG 8349"
      },
      {
        "src": "/images/mexico/IMG_8447.webp",
        "alt": "IMG 8447",
        "caption": "IMG 8447"
      },
      {
        "src": "/images/mexico/IMG_8460.webp",
        "alt": "IMG 8460",
        "caption": "IMG 8460"
      },
      {
        "src": "/images/mexico/IMG_9257.webp",
        "alt": "IMG 9257",
        "caption": "IMG 9257"
      },
      {
        "src": "/images/mexico/IMG_9283.webp",
        "alt": "IMG 9283",
        "caption": "IMG 9283"
      },
      {
        "src": "/images/mexico/IMG_9300.webp",
        "alt": "IMG 9300",
        "caption": "IMG 9300"
      },
      {
        "src": "/images/mexico/IMG_9324.webp",
        "alt": "IMG 9324",
        "caption": "IMG 9324"
      },
      {
        "src": "/images/mexico/IMG_9665.webp",
        "alt": "IMG 9665",
        "caption": "IMG 9665"
      },
      {
        "src": "/images/mexico/IMG_9823.webp",
        "alt": "IMG 9823",
        "caption": "IMG 9823"
      },
      {
        "src": "/images/mexico/IMG_9827.webp",
        "alt": "IMG 9827",
        "caption": "IMG 9827"
      },
      {
        "src": "/images/mexico/IMG_9846.webp",
        "alt": "IMG 9846",
        "caption": "IMG 9846"
      },
      {
        "src": "/images/mexico/IMG_9885.webp",
        "alt": "IMG 9885",
        "caption": "IMG 9885"
      },
      {
        "src": "/images/mexico/IMG_9926.webp",
        "alt": "IMG 9926",
        "caption": "IMG 9926"
      },
      {
        "src": "/images/mexico/IMG_9972.webp",
        "alt": "IMG 9972",
        "caption": "IMG 9972"
      }
    ]
  },
  "miscellaneous": {
    "name": "Miscellaneous",
    "slug": "miscellaneous",
    "photos": [
      {
        "src": "/images/miscellaneous/IMG_4522.JPG",
        "alt": "IMG 4522",
        "caption": "IMG 4522"
      },
      {
        "src": "/images/miscellaneous/IMG_4523.JPG",
        "alt": "IMG 4523",
        "caption": "IMG 4523"
      },
      {
        "src": "/images/miscellaneous/IMG_4525.JPG",
        "alt": "IMG 4525",
        "caption": "IMG 4525"
      },
      {
        "src": "/images/miscellaneous/IMG_4539.JPG",
        "alt": "IMG 4539",
        "caption": "IMG 4539"
      },
      {
        "src": "/images/miscellaneous/IMG_8948.jpg",
        "alt": "IMG 8948",
        "caption": "IMG 8948"
      },
      {
        "src": "/images/miscellaneous/IMG_9609.JPG",
        "alt": "IMG 9609",
        "caption": "IMG 9609"
      },
      {
        "src": "/images/miscellaneous/IMG_9611.JPG",
        "alt": "IMG 9611",
        "caption": "IMG 9611"
      },
      {
        "src": "/images/miscellaneous/IMG_9612.JPG",
        "alt": "IMG 9612",
        "caption": "IMG 9612"
      },
      {
        "src": "/images/miscellaneous/IMG_9613.JPG",
        "alt": "IMG 9613",
        "caption": "IMG 9613"
      },
      {
        "src": "/images/miscellaneous/IMG_9930.jpg",
        "alt": "IMG 9930",
        "caption": "IMG 9930"
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
        "src": "/images/nepal/IMG_9913.JPG",
        "alt": "IMG 9913",
        "caption": "IMG 9913"
      },
      {
        "src": "/images/nepal/IMG_9917.JPG",
        "alt": "IMG 9917",
        "caption": "IMG 9917"
      },
      {
        "src": "/images/nepal/IMG_9922.JPG",
        "alt": "IMG 9922",
        "caption": "IMG 9922"
      },
      {
        "src": "/images/nepal/img_2862.webp",
        "alt": "Img 2862",
        "caption": "Img 2862"
      },
      {
        "src": "/images/nepal/img_2867.webp",
        "alt": "Img 2867",
        "caption": "Img 2867"
      },
      {
        "src": "/images/nepal/img_2873.webp",
        "alt": "Img 2873",
        "caption": "Img 2873"
      },
      {
        "src": "/images/nepal/img_2875.webp",
        "alt": "Img 2875",
        "caption": "Img 2875"
      },
      {
        "src": "/images/nepal/img_2890.webp",
        "alt": "Img 2890",
        "caption": "Img 2890"
      },
      {
        "src": "/images/nepal/img_2893.webp",
        "alt": "Img 2893",
        "caption": "Img 2893"
      },
      {
        "src": "/images/nepal/img_2907.webp",
        "alt": "Img 2907",
        "caption": "Img 2907"
      },
      {
        "src": "/images/nepal/img_2910.webp",
        "alt": "Img 2910",
        "caption": "Img 2910"
      },
      {
        "src": "/images/nepal/img_2912.webp",
        "alt": "Img 2912",
        "caption": "Img 2912"
      },
      {
        "src": "/images/nepal/img_2913.webp",
        "alt": "Img 2913",
        "caption": "Img 2913"
      }
    ]
  },
  "senegal": {
    "name": "Senegal",
    "slug": "senegal",
    "photos": [
      {
        "src": "/images/senegal/IMG_9914.JPG",
        "alt": "IMG 9914",
        "caption": "IMG 9914"
      },
      {
        "src": "/images/senegal/IMG_9915.JPG",
        "alt": "IMG 9915",
        "caption": "IMG 9915"
      },
      {
        "src": "/images/senegal/IMG_9916.JPG",
        "alt": "IMG 9916",
        "caption": "IMG 9916"
      },
      {
        "src": "/images/senegal/IMG_9918.JPG",
        "alt": "IMG 9918",
        "caption": "IMG 9918"
      },
      {
        "src": "/images/senegal/IMG_9920.JPG",
        "alt": "IMG 9920",
        "caption": "IMG 9920"
      },
      {
        "src": "/images/senegal/img_5148.webp",
        "alt": "Img 5148",
        "caption": "Img 5148"
      },
      {
        "src": "/images/senegal/img_5153.webp",
        "alt": "Img 5153",
        "caption": "Img 5153"
      },
      {
        "src": "/images/senegal/img_5167.webp",
        "alt": "Img 5167",
        "caption": "Img 5167"
      },
      {
        "src": "/images/senegal/img_5170.webp",
        "alt": "Img 5170",
        "caption": "Img 5170"
      },
      {
        "src": "/images/senegal/img_5181.webp",
        "alt": "Img 5181",
        "caption": "Img 5181"
      },
      {
        "src": "/images/senegal/img_5188.webp",
        "alt": "Img 5188",
        "caption": "Img 5188"
      },
      {
        "src": "/images/senegal/img_5193.webp",
        "alt": "Img 5193",
        "caption": "Img 5193"
      },
      {
        "src": "/images/senegal/img_5202.webp",
        "alt": "Img 5202",
        "caption": "Img 5202"
      },
      {
        "src": "/images/senegal/img_5205.webp",
        "alt": "Img 5205",
        "caption": "Img 5205"
      },
      {
        "src": "/images/senegal/img_5295.webp",
        "alt": "Img 5295",
        "caption": "Img 5295"
      }
    ]
  },
  "tanzania": {
    "name": "Tanzania",
    "slug": "tanzania",
    "photos": [
      {
        "src": "/images/tanzania/0002_35A.webp",
        "alt": "0002 35A",
        "caption": "0002 35A"
      },
      {
        "src": "/images/tanzania/0004_33A.webp",
        "alt": "0004 33A",
        "caption": "0004 33A"
      },
      {
        "src": "/images/tanzania/0005_32A.webp",
        "alt": "0005 32A",
        "caption": "0005 32A"
      },
      {
        "src": "/images/tanzania/0016_21A.webp",
        "alt": "0016 21A",
        "caption": "0016 21A"
      },
      {
        "src": "/images/tanzania/0017_20A.webp",
        "alt": "0017 20A",
        "caption": "0017 20A"
      },
      {
        "src": "/images/tanzania/0018_19A.webp",
        "alt": "0018 19A",
        "caption": "0018 19A"
      },
      {
        "src": "/images/tanzania/0019_18A.webp",
        "alt": "0019 18A",
        "caption": "0019 18A"
      },
      {
        "src": "/images/tanzania/0020_17A.webp",
        "alt": "0020 17A",
        "caption": "0020 17A"
      },
      {
        "src": "/images/tanzania/0022_15.webp",
        "alt": "0022 15",
        "caption": "0022 15"
      },
      {
        "src": "/images/tanzania/0023_14.webp",
        "alt": "0023 14",
        "caption": "0023 14"
      },
      {
        "src": "/images/tanzania/0027_10.webp",
        "alt": "0027 10",
        "caption": "0027 10"
      },
      {
        "src": "/images/tanzania/0030_7.webp",
        "alt": "0030 7",
        "caption": "0030 7"
      },
      {
        "src": "/images/tanzania/0032_5.webp",
        "alt": "0032 5",
        "caption": "0032 5"
      },
      {
        "src": "/images/tanzania/0034_3.webp",
        "alt": "0034 3",
        "caption": "0034 3"
      },
      {
        "src": "/images/tanzania/0035_2.webp",
        "alt": "0035 2",
        "caption": "0035 2"
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
        "src": "/images/thailand/IMG_9919.JPG",
        "alt": "IMG 9919",
        "caption": "IMG 9919"
      },
      {
        "src": "/images/thailand/IMG_9921.JPG",
        "alt": "IMG 9921",
        "caption": "IMG 9921"
      },
      {
        "src": "/images/thailand/img_7095-2.webp",
        "alt": "Img 7095 2",
        "caption": "Img 7095 2"
      },
      {
        "src": "/images/thailand/img_7097-1.webp",
        "alt": "Img 7097 1",
        "caption": "Img 7097 1"
      },
      {
        "src": "/images/thailand/img_7098.webp",
        "alt": "Img 7098",
        "caption": "Img 7098"
      },
      {
        "src": "/images/thailand/img_7099.webp",
        "alt": "Img 7099",
        "caption": "Img 7099"
      },
      {
        "src": "/images/thailand/img_7100.webp",
        "alt": "Img 7100",
        "caption": "Img 7100"
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
