const AccountOverview = ( {id, account_name, account_type, balance, currency, account_number, is_active} ) => {
  return (
    <div className="flex flex-row justify-between m-4 border-b-1">
      <h2>
        {account_name}
        <span className="block italic text-gray-500">
          {account_number}
        </span>
      </h2>
      <h2>{account_type}</h2>
      <h2>{currency}</h2>
      <h2>{balance}</h2>
    </div>
  );
};

export default AccountOverview;

