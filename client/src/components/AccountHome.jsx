import axios from "axios";
import { useEffect, useState } from "react";
import AccountOverview from "./AccountOverview"

const AccountHome = () => {
  const [accountsState, setAccountsState] = useState([]);
  const [savingsState, setSavingsState] = useState([]);
  const [settlementsState, setSettlementsState] = useState([]);
  const [ccState, setCcState] = useState([]);

  useEffect(() => {
    const getAccountsInfo = async () => {
      try {
        const response = await axios.get("/api/accounts");
        const accounts = response.data.data;
        setAccountsState(accounts);
        setSavingsState(
          accounts.filter((account) => {
            return account.account_type === "savings";
          })
        );
        setSettlementsState(
          accounts.filter((account) => {
            return account.account_type === "settlement";
          })
        );
        setCcState(
          accounts.filter((account) => {
            return account.account_type === "cc";
          })
        );
      } catch (err) {
        console.log("Error");
      }
    };
    getAccountsInfo();
  }, []);
  return (
    <div className="flex-auto divide-y-2 divide-blue-500 px-2 flex-col bg-purple-100 ">
      <div className="text-5xl font-bold p-10">Accounts</div>

      <div className="p-4">
        <h1 className="text-3xl">Savings</h1>
        {savingsState.map( savings => {
            return <AccountOverview key={savings.id} {...savings} />
        })}
      </div>
      <div className="p-4">
        <h1 className="text-3xl">Securities</h1>
        {settlementsState.map( savings => {
            return <AccountOverview key={savings.id} {...savings} />
        })}
      </div>
      <div className="p-4">
        <h1 className="text-3xl">Credit Card</h1>
        {ccState.map( savings => {
            return <AccountOverview key={savings.id} {...savings} />
        })}
      </div>
    </div>
  );
};

export default AccountHome;
