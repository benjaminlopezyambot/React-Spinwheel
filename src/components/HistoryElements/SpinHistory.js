const SpinHistory = () => {
  // dummy data for spin history table
  const spinHistoryData = [
    { id: 1, date: "2023-04-19", result: "Win" },
    { id: 2, date: "2023-04-20", result: "Lose" },
  ];

  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr>
          <th className="border px-4 py-2 border-dashed text-xl text-slate-600">
            ID
          </th>
          <th className="border px-4 py-2 border-dashed text-xl text-slate-600">
            Date
          </th>
          <th className="border px-4 py-2 border-dashed text-xl text-slate-600">
            Result
          </th>
        </tr>
      </thead>
      <tbody>
        {spinHistoryData.map(({ id, date, result }) => (
          <tr key={id}>
            <td className="border-r border-l border-b px-4 py-2 border-dashed">
              <div className=" flex items-center justify-center text-lg">
                #{id}
              </div>
            </td>
            <td className="border-r border-b px-4 py-2 border-dashed">
              <div className=" flex items-center justify-center text-lg">
                {date}
              </div>
            </td>
            <td
              className={`  px-4 py-2 border-dashed text-rose-500 font-semibold border-b  border-r ${
                result === "Lose" ? "text-rose-500" : "text-lime-500"
              }`}
            >
              <div className=" flex items-center justify-center text-lg">
                {result === "Win" ? (
                  <svg
                    className="w-6 h-6 text-lime-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                &nbsp;
                {result}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SpinHistory;
