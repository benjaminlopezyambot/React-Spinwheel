import moment from "moment/moment";

const SpinHistory = ({ results }) => {
  // dummy data for spin history table
  const spinHistoryData = [
    { id: 1, date: "2023-04-21 07:00:00", result: "Win" },
    { id: 2, date: "2023-04-20 12:00:00", result: "Lose" },
    { id: 3, date: "2023-04-20 09:00:00", result: "Win" },
    { id: 4, date: "2023-04-19 09:00:00", result: "Win" },
    { id: 5, date: "2023-04-18 06:00:00", result: "Lose" },
    { id: 6, date: "2023-04-17 22:00:00", result: "Lose" },
    { id: 7, date: "2023-04-17 11:00:00", result: "Lose" },
    { id: 8, date: "2023-04-16 16:00:00", result: "Win" },
  ];

  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr>
          <th className="border px-4 py-2 border-dashed text-md text-slate-600">
            ID
          </th>
          <th className="border px-4 py-2 border-dashed text-md text-slate-600">
            Date
          </th>
          <th className="border px-4 py-2 border-dashed text-md text-slate-600">
            Result
          </th>
        </tr>
      </thead>
      <tbody>
        {results.length > 0 ? (
          results.map(({ id, date, status }) => (
            <tr key={id}>
              <td className="border-r border-l border-b px-4 py-2 border-dashed">
                <div className=" flex items-center justify-center text-sm">
                  #{id}
                </div>
              </td>
              <td className="border-r border-b px-4 py-2 border-dashed">
                <div className=" flex items-center justify-center text-sm">
                  {moment(date).format("LLL")}
                </div>
              </td>
              <td
                className={`px-4 py-2 border-dashed font-semibold border-b  border-r ${
                  status === "Lose" ? "text-rose-500" : "text-lime-500"
                }`}
              >
                <div className=" flex items-center justify-center text-sm">
                  {status === "Won" ? (
                    <svg
                      className="w-6 h-6 text-lime-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-lime-500"
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
                      class="w-6 h-6 text-rose-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  &nbsp;
                  {status}
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border-r border-l border-b px-4 py-2 border-dashed col-span-3">
              <div className=" flex items-center justify-center text-sm">
                No data
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default SpinHistory;
