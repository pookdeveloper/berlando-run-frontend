export { mockProducts, getProductBySlug, getProductsByCategory } from './products';
export { mockRunClubs } from './runClubs';
export { mockEvents } from './events';
export { mockChallenges } from './challenges';
export { mockJournalPosts } from './journalPosts';

export const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === 'true' || process.env.NODE_ENV === 'development';
