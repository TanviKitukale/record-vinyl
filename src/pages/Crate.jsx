import { Link } from 'react-router-dom';
import { useCrate } from '../context/CrateContext.jsx';
import './Crate.css';
import '../pages/Home.css'; // reuses .section__heading and .hero__cta

export default function Crate() {
  const { items, totalPrice, setQty, removeFromCrate } = useCrate();

  if (items.length === 0) {
    return (
      <div className="wrap section crate-empty">
        <h1 className="section__heading">Your crate is empty</h1>
        <p className="muted" style={{ marginBottom: 24 }}>
          Nothing filed away yet. Go dig through the shelves.
        </p>
        <Link to="/" className="hero__cta" style={{ display: 'inline-block' }}>
          Back to browsing
        </Link>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <h1 className="section__heading">Your crate</h1>

      <ul className="crate-list">
        {items.map(({ record, qty }) => (
          <li key={record.id} className="crate-row">
            <img
              src={record.cover}
              alt={`${record.title} cover art`}
              className="crate-row__art"
              width="96"
              height="96"
            />
            <div className="crate-row__info">
              <Link to={`/record/${record.id}`} className="crate-row__title">
                {record.title}
              </Link>
              <p className="muted crate-row__artist">{record.artist}</p>
            </div>

            <div className="crate-row__qty">
              <button
                aria-label={`Decrease quantity of ${record.title}`}
                onClick={() => setQty(record.id, qty - 1)}
              >
                −
              </button>
              <span>{qty}</span>
              <button
                aria-label={`Increase quantity of ${record.title}`}
                onClick={() => setQty(record.id, qty + 1)}
              >
                +
              </button>
            </div>

            <p className="crate-row__price">${record.price * qty}</p>

            <button
              className="crate-row__remove"
              onClick={() => removeFromCrate(record.id)}
              aria-label={`Remove ${record.title} from crate`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="crate-total">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>

      {/* This is a portfolio project, not a live shop, so checkout is
          intentionally a dead end — wiring it to real payment processing
          (Stripe, etc.) is a natural next step once this deploys. */}
      <button className="crate-checkout" disabled title="Checkout isn't wired up in this demo">
        Checkout
      </button>
    </div>
  );
}
