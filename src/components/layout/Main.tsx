import { TCountry } from '../../lib/types';
import CountryCard from '../country-card/CountryCard';
import useCountries from '../../hooks/use-countries';
import './layout.css';

export default function Main() {

  const { countries } = useCountries();

  return (
    <main>
      {countries.map((country: TCountry) => <CountryCard key={country.name} name={country.name} />)}
    </main>
  )
}
