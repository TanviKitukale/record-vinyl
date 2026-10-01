import { useParams, Link } from 'react-router-dom';
import { getGenreById, getRecordsByGenre } from '../data/records';
import RecordCard from '../components/RecordCard.jsx';
import NotFound from './NotFound.jsx';
import '../pages/Home.css'; // reuses .record-grid and .section from Home

// useParams() reads the dynamic part of the URL. The route is defined in
// App.jsx as "/genre/:genreId" — whatever the visitor actually typed there
// (e.g. "jazz") comes through as params.genreId here.
export default function Genre() {
  const { genreId } = useParams();
  const genre = getGenreById(genreId);

  // A URL like /genre/polka doesn't match any real genre. Rather than
  // crash or show an empty page, fall back to the same NotFound page a
  // broken link would hit — a clear dead end instead of a confusing one.
  if (!genre) return <NotFound />;

  const genreRecords = getRecordsByGenre(genreId);

  return (
    <div className="wrap section">
      <p className="muted" style={{ marginBottom: 4 }}>
        <Link to="/">Home</Link> / {genre.name}
      </p>
      <h1 className="section__heading" style={{ fontSize: '2rem' }}>{genre.name}</h1>
      <p className="muted" style={{ maxWidth: '52ch', marginBottom: 32 }}>{genre.blurb}</p>

      {genreRecords.length === 0 ? (
        <p className="muted">Nothing filed under this genre yet — check back soon.</p>
      ) : (
        <div className="record-grid">
          {genreRecords.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>
      )}
    </div>
  );
}
