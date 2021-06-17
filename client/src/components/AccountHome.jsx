import axios from "axios";
import { useEffect, useState } from "react";

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
          accountsState.filter((account) => {
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
    <div className="flex-1 divide-y-2 divide-blue-500 px-2 flex-col bg-purple-100 ">
      <div className="text-5xl font-bold p-10">Accounts</div>

      <div className="py-4">
        <h1 className="text-3xl">Savings</h1>
        <div className="flex flex-row justify-between m-4 border-b-1">
          <h2>{savingsState[0].account_name}</h2>
          <h2>{savingsState[0].account_type}</h2>
          <h2>{savingsState[0].currency}</h2>
          <h2>{savingsState[0].balance}</h2>
        </div>
        <div className="flex flex-row justify-between m-4 border-b-1">
          <h2>{savingsState[0].account_name}</h2>
          <h2>{savingsState[0].account_type}</h2>
          <h2>{savingsState[0].currency}</h2>
          <h2>{savingsState[0].balance}</h2>
        </div>
      </div>

      
      <div className="text-2xl py-4">Settlement</div>
      <div className="text-2xl py-4">Credit Card</div>
    </div>
  );
};

export default AccountHome;
