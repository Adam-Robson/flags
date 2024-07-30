import './country-card.css';

export default function CountryCard({ name, code }: { name: string, code: string }) {
  return (
    <div className="country-card">
      <span className="country-name">{name}</span>
      <img
        src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`}
        width="60"
        height="45"
        alt={`${name}`} /> 
    </div>
  )
}
