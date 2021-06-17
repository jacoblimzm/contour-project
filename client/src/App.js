import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import AccountHome from './components/AccountHome';

function App() {
  return (
    <div className="container flex font-body">
    <NavBar />
    <AccountHome />
    </div>
  );
}

export default App;
