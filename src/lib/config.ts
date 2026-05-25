export const LANDING_MODE = process.env.NEXT_PUBLIC_LANDING_MODE !== 'false';

export const LANDING_ALLOWED_PATHS = ['/', '/about', '/contact', '/community'];

export const JUNE3_REGISTRATION_URL = process.env.NEXT_PUBLIC_JUNE3_REGISTRATION_URL ?? null;

export const SHOW_OTHER_CONTACT_WAYS = process.env.NEXT_PUBLIC_SHOW_OTHER_CONTACT_WAYS === 'true';
