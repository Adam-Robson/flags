import { ChangeEvent } from 'react'
import { TCountry } from '../../lib/types';
import CountryCard from '../country-card/CountryCard';
import useCountries from '../../hooks/use-countries';
import Loader from '../loader/Loader';

import './layout.css';

export default function Main() {

  const { 
    filterCountries, 
    continent, 
    setContinent,
    query,
    setQuery,
    loading,
    error
  } = useCountries();

  const filteredCountries: TCountry[] = filterCountries() as TCountry[];
  
  return (
    <main>
      <input 
        type="text" 
        placeholder="Search for a country..." 
        value={query} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setQuery(e.target.value.toLowerCase());
        }} 
      />
      <br />
      <select
        value={continent}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setContinent(e.target.value)}>
          <option value=''>All</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value="oceania">Oceania</option>
          <option value="northamerica">North America</option>
          <option value="southamerica">South America</option>
        </select>

        <div className="error">{error !== null &&error}</div>
        <div className="loader">{loading && <Loader /> }</div>

      {!loading &&filteredCountries.map((country: TCountry) => 
        <CountryCard 
          key={country.name} 
          name={country.name}
          code={country.code} 
        />)}
    </main>
  )
}
