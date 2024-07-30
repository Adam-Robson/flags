import { useEffect, useState } from 'react';
import fetchCountries from '../services/countries';
import { TCountry } from '../components/lib/types';

export default function useCountries() {
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    const fetchCountryList = async () => {
      const countriesList: TCountry[] = await fetchCountries() as TCountry[];
      setCountries(countriesList);
    }; 

    fetchCountryList();
  }, []);

  return {
    countries
  };
}