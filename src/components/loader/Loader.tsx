import loader from '../../assets/loading.gif';
import './loader.css';

export default function Loader() {
  return (
    <div>
      <img src={loader} alt="loading" className="loader"  />
    </div>
  )
}

