import { Link } from 'react-router-dom';
import '../pages/Home.css'; // reuses .section__heading and .hero__cta

export default function NotFound() {
  return (
    <div className="wrap section" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <h1 className="section__heading">Not in this crate</h1>
      <p className="muted" style={{ marginBottom: 24, maxWidth: '48ch' }}>
        Whatever you were looking for isn't filed here. It might have been
        misfiled, sold, or never existed in the first place.
      </p>
      <Link to="/" className="hero__cta" style={{ display: 'inline-block' }}>
        Back to the front of the shop
      </Link>
    </div>
  );
}
