import client from './client';

export default async function fetchCountries() {
  try {
    const res = await client
      .from('countries')
      .select('*');

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error while retrieving the data, in the catch block: ${error.message}`);
    } else {
      console.error(`There was an error while retrieving the data, that is not an "Error": ${error}`);
    }
  }
}
