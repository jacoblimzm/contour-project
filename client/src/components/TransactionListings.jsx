import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import TransactionRow from "./TransactionRow";

const TransactionListings = () => {
  const [accountState, setAccountState] = useState([]);
  const [transactionsState, setTransactionsState] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getAccountInfo = async () => {
      try {
        const response = await axios.get(`/api/accounts/${id}`);
        const accountInfo = response.data.data;

        console.log(accountInfo);
        setAccountState(accountInfo);
      } catch (err) {
        console.log("Error");
      }
    };
    const getTransactions = async () => {
      try {
        const response = await axios.get(`/api/accounts/${id}/transactions`);
        const transactions = response.data.data;

        console.log(transactions);
        setTransactionsState(transactions);
      } catch (err) {
        console.log("Error");
      }
    };
    getAccountInfo();
    getTransactions();
  }, [id]);
  return (
    <div className="flex-1 divide-y-2 divide-blue-500 px-2 bg-purple-100 ">
    {accountState.map( account => {
        return <AccountHeader key={account.id} {...account} />
    })}
      <div className="p-4">
        <h1 className="text-3xl mb-4">Transactions</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Processed
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">View</span>
                  </th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactionsState.map(transaction => {
                return <TransactionRow key={transaction.id} {...transaction} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionListings;
