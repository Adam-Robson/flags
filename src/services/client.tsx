import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_APP_SUPABASE_URL;
const key = import.meta.env.VITE_APP_SUPABASE_KEY;

const client = createClient(url, key);

export default client;