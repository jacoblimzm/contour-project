import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="flex justify-between">
        <div className="text-2xl font-bold p-10">
          <h2 className="">
            {accountState[0] && accountState[0].account_name} / {accountState[0] && accountState[0].currency}
            <span className="block italic text-gray-500">
              {accountState[0] && accountState[0].account_number} 
            </span>
          </h2>
        </div>
        <div className="text-2xl font-bold p-10">
          <h2 className="">
            Balance: ${accountState[0] && accountState[0].balance}
            <span className="block text-gray-500">{accountState[0] && accountState[0].is_active ? "Active" : "Not Active"}</span>
          </h2>
        </div>
      </div>
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* map function here   */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="">
                    <div className="text-sm font-medium text-gray-900">
                      12 May
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  adfadfsdfsdfsdfssdfsdsdfsfsdfsf
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Yes
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                $200
              </td>
            </tr>
            {/* to here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionListings;
