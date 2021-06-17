import format from 'date-fns/format';

const TransactionRow = ({
  id,
  amount,
  transaction_date,
  description,
  transaction_processed,
}) => {


    
    
    const newDateString = transaction_date.slice(0, 19);
    const date = new Date(newDateString);
    const formattedDate = format(date, "dd MMMM yyyy");

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="">
            <div className="text-sm font-medium text-gray-900">{formattedDate}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {description.substring(0, 30)}...
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction_processed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {transaction_processed ? "Yes" : "No"}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        $200
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          View
        </a>
      </td>
    </tr>
  );
};

export default TransactionRow;
