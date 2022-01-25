import './App.css';
import Language  from "./Components/Language/Languages";
import Battle from './Components/Battle/index';
import Nav from './Components/Nav/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const styles = {
    'margin' : '0 auto',
    'maxWidth' : '1300px',
    'padding' : '50px'
  }  

  return (
    <Router>
      <div style={styles}>
        <Nav />
        <Routes>
          <Route exact path="/" element = {<Language />} />
          <Route path="/battle" element = {<Battle />}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
