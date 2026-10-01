import { NavLink } from 'react-router-dom';
import { genres } from '../data/records';
import { useCrate } from '../context/CrateContext.jsx';
import './Header.css';

export default function Header() {
  const { totalCount } = useCrate();

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <NavLink to="/" className="wordmark">
          Crate
        </NavLink>

        {/* NavLink (not Link) so the active genre gets a distinct style —
            `className` can take a function that receives { isActive }. */}
        <nav className="genre-nav" aria-label="Browse by genre">
          {genres.map((genre) => (
            <NavLink
              key={genre.id}
              to={`/genre/${genre.id}`}
              className={({ isActive }) =>
                isActive ? 'genre-nav__link is-active' : 'genre-nav__link'
              }
            >
              {genre.name}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/crate" className="crate-link">
          Crate
          <span className="crate-link__count">{totalCount}</span>
        </NavLink>
      </div>
    </header>
  );
}
