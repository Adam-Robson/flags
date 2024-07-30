import './country-card.css';

export default function CountryCard({ name }: { name: string }) {
  return (
    <div className="country-card">
      <span className="country-name">{name}</span>
      <img className="country-image" src={`https://flagcdn.com/w320/${name.toLowerCase()}.png`} alt={name} height="100" />
    </div>
  )
}
