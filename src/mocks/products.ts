export const mockProducts = [
  {
    id: '1',
    name: 'Alpha Trail Short 7"',
    slug: 'alpha-trail-short-7',
    description: 'Ultralight trail running short with 4-way stretch and laser ventilation. Built for long-distance mountain running.',
    price: 98.00,
    category: 'TRAIL_SHORTS',
    productStory: 'Designed in collaboration with ultrarunners in the French Alps. The Alpha Short emerged from 1,000+ hours of testing on technical terrain.',
    materialStory: 'Constructed from Japanese ripstop nylon with 4-way stretch. DWR coating sheds water. Laser-cut ventilation zones regulate temperature.',
    weight: 85,
    material: 'Nylon ripstop with elastane',
    temperature: '-5°C to 30°C',
    featured: true,
    useCases: ['LONG_DISTANCE', 'TECHNICAL_TERRAIN', 'HOT_WEATHER'],
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-01-15'),
    images: [
      { 
        id: '1',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1556906781-9a412961c28c', 
        alt: 'Alpha Trail Short - Front', 
        order: 0,
        createdAt: new Date('2026-01-15'),
        updatedAt: new Date('2026-01-15'),
      },
      { 
        id: '2',
        productId: '1',
        url: 'https://images.unsplash.com/photo-1598972598118-51f80b8fe170', 
        alt: 'Alpha Trail Short - Detail', 
        order: 1,
        createdAt: new Date('2026-01-15'),
        updatedAt: new Date('2026-01-15'),
      },
    ],
    variants: [
      { id: '1', productId: '1', size: 'XS', color: 'Black', sku: 'ALPHA-SHORT-BLK-XS', stock: 15, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '2', productId: '1', size: 'S', color: 'Black', sku: 'ALPHA-SHORT-BLK-S', stock: 25, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '3', productId: '1', size: 'M', color: 'Black', sku: 'ALPHA-SHORT-BLK-M', stock: 30, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '4', productId: '1', size: 'L', color: 'Black', sku: 'ALPHA-SHORT-BLK-L', stock: 25, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '5', productId: '1', size: 'XL', color: 'Black', sku: 'ALPHA-SHORT-BLK-XL', stock: 15, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '6', productId: '1', size: 'S', color: 'Olive', sku: 'ALPHA-SHORT-OLV-S', stock: 20, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '7', productId: '1', size: 'M', color: 'Olive', sku: 'ALPHA-SHORT-OLV-M', stock: 25, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
      { id: '8', productId: '1', size: 'L', color: 'Olive', sku: 'ALPHA-SHORT-OLV-L', stock: 20, createdAt: new Date('2026-01-15'), updatedAt: new Date('2026-01-15') },
    ],
  },
  {
    id: '2',
    name: 'Velocity Technical Tee',
    slug: 'velocity-technical-tee',
    description: 'Featherweight merino blend tee with anti-odor technology. Seamless construction for zero chafing.',
    price: 78.00,
    category: 'TECHNICAL_TEES',
    productStory: 'The Velocity Tee is the result of obsessive refinement. We tested 47 fabric combinations before landing on this merino-synthetic hybrid.',
    materialStory: '60% merino wool, 40% recycled polyester. Offset shoulder seams eliminate pressure points. Reflective logo for low-light visibility.',
    weight: 110,
    material: 'Merino wool blend',
    temperature: '0°C to 25°C',
    featured: true,
    useCases: ['LONG_DISTANCE', 'SPEED_WORK'],
    createdAt: new Date('2026-01-20'),
    updatedAt: new Date('2026-01-20'),
    images: [
      { 
        id: '3',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', 
        alt: 'Velocity Tee - Front', 
        order: 0,
        createdAt: new Date('2026-01-20'),
        updatedAt: new Date('2026-01-20'),
      },
      { 
        id: '4',
        productId: '2',
        url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a', 
        alt: 'Velocity Tee - Detail', 
        order: 1,
        createdAt: new Date('2026-01-20'),
        updatedAt: new Date('2026-01-20'),
      },
    ],
    variants: [
      { id: '9', productId: '2', size: 'XS', color: 'Stone', sku: 'VEL-TEE-STN-XS', stock: 20, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '10', productId: '2', size: 'S', color: 'Stone', sku: 'VEL-TEE-STN-S', stock: 30, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '11', productId: '2', size: 'M', color: 'Stone', sku: 'VEL-TEE-STN-M', stock: 35, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '12', productId: '2', size: 'L', color: 'Stone', sku: 'VEL-TEE-STN-L', stock: 30, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '13', productId: '2', size: 'XL', color: 'Stone', sku: 'VEL-TEE-STN-XL', stock: 20, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '14', productId: '2', size: 'M', color: 'Black', sku: 'VEL-TEE-BLK-M', stock: 35, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
      { id: '15', productId: '2', size: 'L', color: 'Black', sku: 'VEL-TEE-BLK-L', stock: 30, createdAt: new Date('2026-01-20'), updatedAt: new Date('2026-01-20') },
    ],
  },
];

export const getProductBySlug = (slug: string) => {
  return mockProducts.find(p => p.slug === slug) || null;
};

export const getProductsByCategory = (category?: string) => {
  if (!category) return mockProducts;
  return mockProducts.filter(p => p.category === category);
};
