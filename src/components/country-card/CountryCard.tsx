import './country-card.css';

export default function CountryCard({ name }: { name: string }) {
  return (
    <div className="country-card">
      <span className="country-name">{name}</span>
    </div>
  )
}
