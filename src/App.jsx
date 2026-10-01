import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

// PERFORMANCE: lazy() + Suspense is React's built-in code splitting.
// Without it, Vite would bundle Home, Genre, RecordDetail, Crate and
// NotFound into one JS file that every visitor downloads on their first
// request, even if all they ever look at is the homepage. With lazy(),
// each page becomes its own small chunk that only downloads the moment
// someone actually navigates to it — which is exactly what "optimize
// assets for maximum performance" is asking for, and it costs nothing
// to set up beyond this one change.
const Home = lazy(() => import('./pages/Home.jsx'));
const Genre = lazy(() => import('./pages/Genre.jsx'));
const RecordDetail = lazy(() => import('./pages/RecordDetail.jsx'));
const Crate = lazy(() => import('./pages/Crate.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Suspense shows the fallback (Loader) while the chunk for the
            matched route is still downloading. On a fast connection this
            flashes by too quickly to notice — it only matters on slow
            networks, which is exactly when it helps most. */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genre/:genreId" element={<Genre />} />
            <Route path="/record/:recordId" element={<RecordDetail />} />
            <Route path="/crate" element={<Crate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
