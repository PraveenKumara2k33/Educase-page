import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Sigin from './Sigin';
import Create from './Create';
import Page from './Page';
import { UserProvider } from './UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Welcome />} /> 
            <Route path="/create" element={<Create />} />
            <Route path="/page" element={<Page />} />
            <Route path="/login" element={<Sigin />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
