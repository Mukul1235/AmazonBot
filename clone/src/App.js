import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home'
import CombiningHomepage from './CombiningHomepage';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Combining_Checkout from './Combining_Checkout';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={< Login />}  />
        <Route path="/" element={< CombiningHomepage />}  />
          <Route path='/checkout' element={<Combining_Checkout />} >
          </Route>
          </Routes>
      </div>
      </Router>
  );
}

export default App;
