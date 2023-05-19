import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InfoModal from './InfoModal'
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="bg">
            <InfoModal />
        </div>
    </div>
  );
}

export default App;
