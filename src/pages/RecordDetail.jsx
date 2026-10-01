import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRecordById, getGenreById, getRecordsByGenre } from '../data/records';
import { useCrate } from '../context/CrateContext.jsx';
import RecordCard from '../components/RecordCard.jsx';
import NotFound from './NotFound.jsx';
import './RecordDetail.css';
import '../pages/Home.css'; // reuses .record-grid

export default function RecordDetail() {
  const { recordId } = useParams();
  const record = getRecordById(recordId);
  const { addToCrate } = useCrate();
  const [justAdded, setJustAdded] = useState(false);

  if (!record) return <NotFound />;

  const genre = getGenreById(record.genre);
  // "You might also like" — same genre, minus the record you're already on,
  // capped at 3 so the section stays a quick glance, not another full grid.
  const related = getRecordsByGenre(record.genre)
    .filter((r) => r.id !== record.id)
    .slice(0, 3);

  const handleAdd = () => {
    addToCrate(record.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="wrap section">
      <p className="muted" style={{ marginBottom: 24 }}>
        <Link to="/">Home</Link> / <Link to={`/genre/${genre.id}`}>{genre.name}</Link> / {record.title}
      </p>

      <div className="detail__row">
        <img
          className="detail__art"
          src={record.cover}
          alt={`${record.title} cover art`}
          width="640"
          height="640"
        />

        <div className="detail__info">
          <p className="muted detail__catalog">{record.catalogNo}</p>
          <h1 className="detail__title">{record.title}</h1>
          <p className="detail__artist">{record.artist}, {record.year}</p>
          <p className="detail__description">{record.description}</p>
          <p className="detail__price">${record.price}</p>

          <button className="detail__add" onClick={handleAdd}>
            {justAdded ? 'Added to crate' : 'Add to crate'}
          </button>

          <h2 className="detail__tracklist-heading">Tracklist</h2>
          <ol className="tracklist">
            {record.tracklist.map((track, i) => (
              <li key={track.title} className="tracklist__row">
                <span className="tracklist__num">{i + 1}</span>
                <span className="tracklist__title">{track.title}</span>
                <span className="tracklist__duration muted">{track.duration}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: 64 }}>
          <h2 className="section__heading">You might also like</h2>
          <div className="record-grid">
            {related.map((r) => (
              <RecordCard key={r.id} record={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
