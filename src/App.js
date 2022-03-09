import { useFetch } from "./hooks/fetch";
import { useLocalStorage } from "./hooks/localStorage";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Nav from "./components/navigation/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Admin />} />
        </Routes>
      </div>
      <div>
        
      </div>
    </Router>
  );
}

export default App;
