import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AccountHome from "./components/AccountHome";
import TransactionListings from "./components/TransactionListings";
import TransactionDetail from "./components/TransactionDetail";

function App() {
  return (
    <div className="container flex font-body">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <AccountHome />
        </Route>
        <Route path="/transactions/:accountId/detail/:transactionId">
          <TransactionDetail />
        </Route>
        <Route path="/transactions/:id">
          <TransactionListings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
