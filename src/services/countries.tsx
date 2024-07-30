import client from './client';
import { PostgrestResponse } from '@supabase/supabase-js';
import { type TCountry } from '../lib/types';

export default async function fetchCountries() {
  try {
    const response: PostgrestResponse<TCountry> = await client
      .from('countries-table')
      .select('*');

      if (response.error) {
        throw response.error;
      }
  
      return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error while retrieving the data, in the catch block: ${error.message}`);
    } else {
      console.error(`An unknown error occurred while retrieving the data: ${error}`);
    }
  }
}
