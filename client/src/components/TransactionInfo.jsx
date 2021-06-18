import format from "date-fns/format";

const TransactionInfo = ({
  account_id,
  id,
  description,
  transaction_date,
  transaction_processed,
  amount,
}) => {
  const newDateString = transaction_date.slice(0, 19);
  const date = new Date(newDateString);
  const formattedDate = format(date, "dd MMMM yyyy");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      <div className="">
        Transaction ID:
        <h2 className="font-medium text-gray-900">{id}</h2>
      </div>
      <div>
        Processed:
        <h2
          className={`px-2 block w-min text-xs leading-5 font-semibold rounded-full ${
            transaction_processed
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {transaction_processed ? "Yes" : "No"}
        </h2>
      </div>
      <div>
        Amount:
        <h2 className="text-gray-500">{amount}</h2>
      </div>
      <div>
        Date:
        <h2 className="font-medium text-gray-900">{formattedDate}</h2>
      </div>
      <div>
        Description:
        <h2 className="font-medium text-gray-900">{description}</h2>
      </div>
    </div>
  );
};

export default TransactionInfo;
