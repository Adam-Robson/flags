import './country-card.css';

export default function CountryCard({ name, code }: { name: string, code: string }) {
  return (
    <div className="country-card">
      <span className="country-name">{name}</span>
      <img className="country-image" src={`https://flagcdn.com/w320/${code.toLowerCase()}.png`} alt={name} height="100" />
    </div>
  )
}
