import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';
import Bitlease from './pages/Bitlease';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Bitlease />} />
      {/* <Route path="/*" element={<Main />} /> */}
    </Routes>
  );
}

export default App;