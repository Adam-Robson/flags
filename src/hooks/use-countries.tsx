import { useEffect, useState } from 'react';
import fetchCountries from '../services/countries';
import { TCountry } from '../lib/types';

export default function useCountries() {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [continent, setContinent] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data: TCountry[] = await fetchCountries() as TCountry[];
        setCountries(data);
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`There was an error while retrieving the data, in the catch block: ${error.message}`);
        } else {
          console.error(`An unknown error occurred while retrieving the data: ${error}`);
        }
        setError('An error occurred while retrieving the data');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filterCountries = () => {
    const filteredCountries = countries?.filter((country: TCountry) => (
        (continent === 'all' ? true : country.continent === continent) && (country.name.toLowerCase().includes(query.toLowerCase()))
    ));
    return filteredCountries;
  };

  return {
    filterCountries,
    countries,
    continent,
    setContinent,
    query,
    setQuery,
    error,
    loading
  };
}