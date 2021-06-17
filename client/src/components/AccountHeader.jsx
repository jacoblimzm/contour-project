const AccountHeader = ( {account_name, currency, account_number, balance, is_active} ) => {
  return (
    <div className="flex justify-between">
      <div className="text-2xl font-bold p-10">
        <h2 className="">
          {account_name} /{" "}
          {currency}
          <span className="block italic text-gray-500">
            {account_number}
          </span>
        </h2>
      </div>
      <div className="text-2xl font-bold p-10">
        <h2 className="">
          Balance: ${balance}
          <span className="block text-gray-500">
            {is_active
              ? "Active"
              : "Not Active"}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default AccountHeader;
