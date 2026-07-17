export default function LeadScoreCard({ score }) {

  if (!score) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-6">
          Lead Intelligence
        </h2>

        <p className="text-gray-500">
          No lead score available yet
        </p>
      </div>
    );
  }

  const data = score.lead_score || {};

  const leadScore = data.score ?? "N/A";
  const priority = data.priority ?? "N/A";
  const reason = data.reason ?? "No reason available";

  const getColor = () => {
    if (leadScore >= 80) return "text-green-600";
    if (leadScore >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Lead Intelligence
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <h3 className="text-gray-500">
            Lead Score
          </h3>

          <p className={`text-5xl font-bold mt-3 ${getColor()}`}>
            {leadScore}
          </p>
        </div>

        <div>
          <h3 className="text-gray-500">
            Priority
          </h3>

          <p className="text-3xl font-bold text-red-500 mt-3">
            {priority}
          </p>
        </div>

      </div>

      <div className="mt-8">

        <h3 className="font-bold text-lg">
          Reason
        </h3>

        <p className="mt-2 text-gray-700 whitespace-pre-wrap">
          {reason}
        </p>

      </div>

    </div>
  );
}