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
          <span className={`p-2.5 block leading-5 font-semibold rounded-full max-w-max ${is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
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
