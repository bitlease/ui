import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
// import Main from "./pages/Main";
import Bitlease from "./pages/Bitlease";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
<>
    {/* <Navbar /> */}
    <Routes>
      <Route path="Main" element={<Bitlease />} />
      <Route path="Home" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
