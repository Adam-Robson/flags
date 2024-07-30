import dotenv from 'dotenv';
dotenv.config({ path: './.env.test' });

export const url = import.meta.env.VITE_APP_SUPABASE_URL;
export const key = import.meta.env.VITE_APP_SUPABASE_KEY;
