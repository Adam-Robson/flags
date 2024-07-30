import { useEffect, useState } from 'react';
import fetchCountries from '../services/countries';
import { TCountry } from '../lib/types';

export default function useCountries() {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [continent, setContinent] = useState<string>('');

 

  useEffect(() => {
    const fetchCountryList = async () => {
      const countriesList: TCountry[] = await fetchCountries() as TCountry[];
      setCountries(countriesList);
    }; 

    fetchCountryList();
  }, []);

  const filterCountries = (continent: string) => {
    countries.filter((c: TCountry) => c.continent === continent);
  };

  return {
    filterCountries,
    countries,
    continent,
    setContinent
  };
}