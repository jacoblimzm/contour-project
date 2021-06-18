import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import TransactionInfo from "./TransactionInfo";

const TransactionDetail = () => {
  const [accountState, setAccountState] = useState([]);
  const [transactionState, setTransactionState] = useState([]);
  const { accountId, transactionId } = useParams();

  useEffect(() => {
    const getAccountInfo = async () => {
      try {
        const response = await axios.get(`/api/accounts/${accountId}`);
        const accountInfo = response.data.data;

        setAccountState(accountInfo);
      } catch (err) {
        console.log("Error");
      }
    };

    const getTransactionInfo = async () => {
      try {
        const response = await axios.get(
          `/api/accounts/${accountId}/transactions/${transactionId}`
        );
        const transactionInfo = response.data.data;

        setTransactionState(transactionInfo);
      } catch (err) {
        console.log("Error");
      }
    };
    getAccountInfo();
    getTransactionInfo();
  }, [accountId, transactionId]);
  return (
    <div className="flex-1 divide-y-2 divide-blue-500 px-2 bg-purple-100 ">
      {accountState.map((account) => {
        return <AccountHeader key={account.id} {...account} />;
      })}
      <h1 className="text-3xl p-4 w-full">Transaction Details</h1>
      {transactionState.map(transaction => {
        return <TransactionInfo key={transaction.id} {...transaction} />
      })}
    </div>
  );
};

export default TransactionDetail;
