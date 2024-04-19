import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        FITNESS TRACKER WEB APPLICATION
        </p>
      <LoginPage/>
      </header>
    </div>
  );
}

export default App;
