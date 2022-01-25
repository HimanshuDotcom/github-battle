import './App.css';
import Language  from "./Components/Language/Languages";


function App() {
  const styles = {
    'margin' : '0 auto',
    'maxWidth' : '1300px',
    'padding' : '50px'
  }  

  return (
    <div style={styles}>
      <Language />
    </div>
  );
}

export default App;
