import { Link } from "react-router-dom";
const AccountOverview = ({
  id,
  account_name,
  account_type,
  balance,
  currency,
  account_number,
  is_active,
}) => {
  return (
    <div className="flex flex-row m-4  border-b border-gray-300">
      <h2 className="flex-1">
        <Link className="hover:text-white hover:bg-blue-500 rounded px-2" to={{
          pathname: `/transactions/${id}`,
          state: {
            account_name,
            account_number,
            balance,
            id,
            is_active
          }
        }
        }>{account_name}</Link>
        <span className="px-2 block italic text-gray-500">{account_number}</span>
      </h2>
      <h2 className="flex-1">
        <span className="block">Account Type:</span>
        {account_type}
      </h2>
      <h2 className="flex-1">
        <span className="block">Currency:</span>
        {currency}
      </h2>
      <h2 className="flex-1">
        <span className="block">Balance:</span>${balance}
      </h2>
    </div>
  );
};

export default AccountOverview;
