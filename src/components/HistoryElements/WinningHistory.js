const WinningHistory = () => {
  // dummy data for winning history table
  const winningHistoryData = [
    { id: 1, date: "2023-04-19", amount: "$10" },
    { id: 2, date: "2023-04-20", amount: "$5" },
    { id: 3, date: "2023-04-21", amount: "$20" },
  ];

  return (
    <table className="table-auto  w-full rounded-lg">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {winningHistoryData.map(({ id, date, amount }) => (
          <tr key={id}>
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">{date}</td>
            <td className="border px-4 py-2">{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default WinningHistory;
