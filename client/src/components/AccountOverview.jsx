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
        {account_name}
        <Link
          className="text-indigo-600 hover:text-indigo-900 mx-2"
          to={{
            pathname: `/transactions/${id}`,
            state: {
              account_name,
              account_number,
              balance,
              id,
              is_active,
            },
          }}
        >
          View
        </Link>
        <span className="block italic text-gray-500">
          {account_number}
        </span>
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
