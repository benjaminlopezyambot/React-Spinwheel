import moment from "moment";

const WinningHistory = ({ results }) => {
  const filterResults =
    results.length > 0
      ? results.filter((result) => result.status === "Won")
      : [];
  console.log(
    "🚀 ~ file: WinningHistory.js:4 ~ WinningHistory ~ results:",
    filterResults
  );
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
            Prize
          </th>
        </tr>
      </thead>
      <tbody>
        {filterResults.length > 0 ? (
          filterResults.map(({ id, date, value, option }) => (
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
                className={`  px-4 py-2 border-dashed font-semibold border-b  border-r text-lime-500`}
              >
                <div className=" flex items-center justify-center text-sm">
                  {option}
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="border-r border-l border-b px-4 py-2 border-dashed">
              <div className=" flex items-center justify-center text-sm">
                No Data
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default WinningHistory;
