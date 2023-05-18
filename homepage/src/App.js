import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my Website.
        </p>
        <Button 
        color = 'light'
        href = 'resume'
        >My Resume</Button>
      </header>
    </div>
  );
}

export default App;
