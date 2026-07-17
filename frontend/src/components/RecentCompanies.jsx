export default function RecentCompanies({ company }) {

  const companies = company
    ? [
        {
          name:
            company.company?.name ||
            company.company_name ||
            "Unknown Company",

          score:
            company.lead_score?.score ||
            company.lead_score ||
            "N/A",

          priority:
            company.lead_score?.priority ||
            company.priority ||
            "N/A",

          status: "Analyzed",
        },
      ]
    : [];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Companies
      </h2>

      {companies.length === 0 ? (

        <p className="text-gray-500">
          No companies analyzed yet
        </p>

      ) : (

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">
                Company
              </th>

              <th>
                Score
              </th>

              <th>
                Priority
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {companies.map((item, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="p-3">
                  {item.name}
                </td>

                <td>
                  {item.score}
                </td>

                <td>

                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700">

                    {item.priority}

                  </span>

                </td>

                <td>

                  {item.status}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );

}