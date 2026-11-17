import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FkiLobbyConcert from './pages/FkiLobbyConcert';
import Snowfall from './components/Snowfall';
import SurveyFloat from './components/SurveyFloat';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <Router basename={basename}>
      <Snowfall />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:sessionId" element={<FkiLobbyConcert />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SurveyFloat />
    </Router>
  );
}
