import { Link } from 'react-router-dom';
import { records, genres } from '../data/records';
import RecordCard from '../components/RecordCard.jsx';
import './Home.css';

const featured = records.find((r) => r.id === 'r-014');
const newArrivals = records.filter((r) => r.isNew);

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="wrap hero__row">
          <div className="hero__text">
            <p className="hero__catalog muted">{featured.catalogNo}</p>
            <h1 className="hero__title">{featured.title}</h1>
            <p className="hero__artist">{featured.artist}, {featured.year}</p>
            <p className="hero__description">{featured.description}</p>
            <Link to={`/record/${featured.id}`} className="hero__cta">
              Read the sleeve notes
            </Link>
          </div>
          <Link to={`/record/${featured.id}`} className="hero__art">
            <img src={featured.cover} alt={`${featured.title} cover art`} width="640" height="640" />
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__heading">Browse the crates</h2>
        <div className="genre-grid">
          {genres.map((genre) => (
            <Link key={genre.id} to={`/genre/${genre.id}`} className="genre-tile">
              <h3>{genre.name}</h3>
              <p className="muted">{genre.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section__heading">New arrivals</h2>
        <div className="record-grid">
          {newArrivals.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
      </section>
    </div>
  );
}
