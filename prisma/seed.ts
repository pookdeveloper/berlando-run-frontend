import { PrismaClient, ProductCategory, ProductUseCase, EventType, JournalCategory } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  console.log('🧹 Cleaning existing data...');
  await prisma.newsletter.deleteMany();
  await prisma.journalPost.deleteMany();
  await prisma.challenge.deleteMany();
  await prisma.event.deleteMany();
  await prisma.runClub.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  console.log('📦 Creating products...');
  
  const alphaShort = await prisma.product.create({
    data: {
      name: 'Alpha Trail Short 7"',
      slug: 'alpha-trail-short-7',
      description: 'Ultralight trail running short with 4-way stretch and laser ventilation. Built for long-distance mountain running.',
      price: 98.00,
      category: ProductCategory.TRAIL_SHORTS,
      productStory: 'Designed in collaboration with ultrarunners in the French Alps. The Alpha Short emerged from 1,000+ hours of testing on technical terrain.',
      materialStory: 'Constructed from Japanese ripstop nylon with 4-way stretch. DWR coating sheds water. Laser-cut ventilation zones regulate temperature.',
      weight: 85,
      material: 'Nylon ripstop with elastane',
      temperature: '-5°C to 30°C',
      featured: true,
      useCases: [ProductUseCase.LONG_DISTANCE, ProductUseCase.TECHNICAL_TERRAIN, ProductUseCase.HOT_WEATHER],
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1556906781-9a412961c28c', alt: 'Alpha Trail Short - Front', order: 0 },
          { url: 'https://images.unsplash.com/photo-1598972598118-51f80b8fe170', alt: 'Alpha Trail Short - Detail', order: 1 },
        ],
      },
      variants: {
        create: [
          { size: 'XS', color: 'Black', sku: 'ALPHA-SHORT-BLK-XS', stock: 15 },
          { size: 'S', color: 'Black', sku: 'ALPHA-SHORT-BLK-S', stock: 25 },
          { size: 'M', color: 'Black', sku: 'ALPHA-SHORT-BLK-M', stock: 30 },
          { size: 'L', color: 'Black', sku: 'ALPHA-SHORT-BLK-L', stock: 25 },
          { size: 'XL', color: 'Black', sku: 'ALPHA-SHORT-BLK-XL', stock: 15 },
          { size: 'S', color: 'Olive', sku: 'ALPHA-SHORT-OLV-S', stock: 20 },
          { size: 'M', color: 'Olive', sku: 'ALPHA-SHORT-OLV-M', stock: 25 },
          { size: 'L', color: 'Olive', sku: 'ALPHA-SHORT-OLV-L', stock: 20 },
        ],
      },
    },
  });

  const velocityTee = await prisma.product.create({
    data: {
      name: 'Velocity Technical Tee',
      slug: 'velocity-technical-tee',
      description: 'Featherweight merino blend tee with anti-odor technology. Seamless construction for zero chafing.',
      price: 78.00,
      category: ProductCategory.TECHNICAL_TEES,
      productStory: 'The Velocity Tee is the result of obsessive refinement. We tested 47 fabric combinations before landing on this merino-synthetic hybrid.',
      materialStory: '60% merino wool, 40% recycled polyester. Offset shoulder seams eliminate pressure points. Reflective logo for low-light visibility.',
      weight: 110,
      material: 'Merino wool blend',
      temperature: '0°C to 25°C',
      featured: true,
      useCases: [ProductUseCase.LONG_DISTANCE, ProductUseCase.SPEED_WORK],
      images: {
        create: [
          { url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', alt: 'Velocity Tee - Front', order: 0 },
          { url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a', alt: 'Velocity Tee - Detail', order: 1 },
        ],
      },
      variants: {
        create: [
          { size: 'XS', color: 'Stone', sku: 'VEL-TEE-STN-XS', stock: 20 },
          { size: 'S', color: 'Stone', sku: 'VEL-TEE-STN-S', stock: 30 },
          { size: 'M', color: 'Stone', sku: 'VEL-TEE-STN-M', stock: 35 },
          { size: 'L', color: 'Stone', sku: 'VEL-TEE-STN-L', stock: 30 },
          { size: 'XL', color: 'Stone', sku: 'VEL-TEE-STN-XL', stock: 20 },
          { size: 'M', color: 'Black', sku: 'VEL-TEE-BLK-M', stock: 35 },
          { size: 'L', color: 'Black', sku: 'VEL-TEE-BLK-L', stock: 30 },
        ],
      },
    },
  });

  console.log('🏃 Creating run clubs...');
  
  await prisma.runClub.createMany({
    data: [
      {
        name: 'Madrid Trail Collective',
        city: 'Madrid',
        country: 'Spain',
        latitude: 40.4168,
        longitude: -3.7038,
        description: 'Weekly trail runs in the Sierra de Guadarrama. All paces welcome.',
        meetingDay: 'Saturday',
        meetingTime: '07:00',
        instagram: '@madrid_trail_collective',
      },
      {
        name: 'Barcelona Mountain Runners',
        city: 'Barcelona',
        country: 'Spain',
        latitude: 41.3851,
        longitude: 2.1734,
        description: 'Technical trail running in Collserola Natural Park. Sunrise runs every Wednesday.',
        meetingDay: 'Wednesday',
        meetingTime: '06:30',
        instagram: '@bcn_mountain_runners',
      },
      {
        name: 'Paris Urban Trail Club',
        city: 'Paris',
        country: 'France',
        latitude: 48.8566,
        longitude: 2.3522,
        description: 'Exploring the city through running. Urban trails, stairs, and hidden passages.',
        meetingDay: 'Sunday',
        meetingTime: '08:00',
        instagram: '@paris_urban_trail',
      },
      {
        name: 'Berlin Ultralight Runners',
        city: 'Berlin',
        country: 'Germany',
        latitude: 52.5200,
        longitude: 13.4050,
        description: 'Long-distance training runs. Grunewald Forest and beyond.',
        meetingDay: 'Saturday',
        meetingTime: '07:30',
        instagram: '@berlin_ultralight',
      },
      {
        name: 'London Freedom Runners',
        city: 'London',
        country: 'United Kingdom',
        latitude: 51.5074,
        longitude: -0.1278,
        description: 'Running as freedom. Hampstead Heath, Richmond Park, and city exploration.',
        meetingDay: 'Friday',
        meetingTime: '06:00',
        instagram: '@london_freedom_runners',
      },
    ],
  });

  console.log('📅 Creating events...');
  
  await prisma.event.createMany({
    data: [
      {
        title: 'Sunrise Summit Run - Guadarrama',
        slug: 'sunrise-summit-run-guadarrama',
        type: EventType.SUNRISE_RUN,
        description: 'Start before dawn, summit at sunrise. 15km trail run with 800m elevation gain in the Sierra de Guadarrama mountains outside Madrid.',
        location: 'Navacerrada, Spain',
        date: new Date('2026-04-15T05:30:00Z'),
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        registrationUrl: 'https://berlando.run/events/sunrise-summit-guadarrama',
      },
      {
        title: 'Trail Weekend - French Alps',
        slug: 'trail-weekend-french-alps',
        type: EventType.TRAIL_WEEKEND,
        description: '3-day trail running immersion in Chamonix. Technical skills, long runs, and mountain culture. Limited to 20 participants.',
        location: 'Chamonix, France',
        date: new Date('2026-06-12T08:00:00Z'),
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        registrationUrl: 'https://berlando.run/events/trail-weekend-alps',
      },
      {
        title: 'Berlin Urban Exploration Run',
        slug: 'berlin-urban-exploration-run',
        type: EventType.URBAN_EXPLORATION,
        description: '20km through Berlin\'s hidden trails, abandoned places, and urban wilderness. Discover the city differently.',
        location: 'Berlin, Germany',
        date: new Date('2026-05-08T06:00:00Z'),
        image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047',
        registrationUrl: 'https://berlando.run/events/berlin-urban-exploration',
      },
    ],
  });

  console.log('🏆 Creating challenges...');
  
  await prisma.challenge.createMany({
    data: [
      {
        title: 'March Mileage Challenge',
        slug: 'march-mileage-challenge',
        description: 'Run 200 kilometers in March. Track your progress, share your routes, and connect with runners worldwide pushing their limits.',
        type: 'distance',
        target: 200,
        unit: 'km',
        startDate: new Date('2026-03-01'),
        endDate: new Date('2026-03-31'),
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8',
      },
      {
        title: 'Vertical Kilometer April',
        slug: 'vertical-kilometer-april',
        description: 'Climb 1,000 meters of elevation in a single run. Technical trails, steep climbs, summit pushes. One month to complete.',
        type: 'elevation',
        target: 1000,
        unit: 'meters',
        startDate: new Date('2026-04-01'),
        endDate: new Date('2026-04-30'),
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
      },
    ],
  });

  console.log('📝 Creating journal posts...');
  
  await prisma.journalPost.createMany({
    data: [
      {
        title: 'Running as Freedom: A Manifesto',
        slug: 'running-as-freedom-manifesto',
        excerpt: 'Why we run. Not for medals or times, but for the feeling of movement, the sense of exploration, the experience of being fully present.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Running is not about racing. It\'s about freedom...',
        category: JournalCategory.PHILOSOPHY,
        author: 'Marcus Hjelm',
        image: 'https://images.unsplash.com/photo-1476673160081-cf065607f449',
        publishedAt: new Date('2026-02-15'),
      },
      {
        title: 'The GR20: 180km of Corsican Beauty',
        slug: 'gr20-corsican-trail-guide',
        excerpt: 'A complete guide to one of Europe\'s most challenging long-distance trails. Technical terrain, stunning views, and lessons learned.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The GR20 traverses Corsica from north to south...',
        category: JournalCategory.ROUTES,
        author: 'Sophie Laurent',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
        publishedAt: new Date('2026-03-01'),
      },
      {
        title: 'Interview: Kilian Jornet on Simplicity',
        slug: 'kilian-jornet-interview-simplicity',
        excerpt: 'The legendary mountain runner shares his philosophy on gear, training, and why less is more in ultrarunning.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. "I don\'t need much," Kilian says...',
        category: JournalCategory.ATHLETES,
        author: 'Emma Thompson',
        image: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38',
        publishedAt: new Date('2026-02-28'),
      },
    ],
  });

  console.log('✅ Seed completed!');
  console.log(`  - Products: ${await prisma.product.count()}`);
  console.log(`  - Run Clubs: ${await prisma.runClub.count()}`);
  console.log(`  - Events: ${await prisma.event.count()}`);
  console.log(`  - Challenges: ${await prisma.challenge.count()}`);
  console.log(`  - Journal Posts: ${await prisma.journalPost.count()}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
