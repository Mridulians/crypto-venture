/* eslint-disable react/prop-types */
// src/components/HistoricalTable.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const HistoricalTable = ({ crypto }) => {
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart`,
        {
          params: { vs_currency: "usd", days: 30 },
        }
      );
      setHistoricalData(response.data.prices);
    };
    fetchHistoricalData();
  }, [crypto]);

  // Get the last 10 entries
  const last10DaysData = historicalData.slice(-10);

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Historical Data for {crypto}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">
                Date
              </th>
              <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {last10DaysData.map((data, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="px-6 py-4 text-gray-700">
                  {new Date(data[0]).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  ${data[1].toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoricalTable;