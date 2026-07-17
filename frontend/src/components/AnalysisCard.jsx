export default function AnalysisCard({ analysis }) {

  if (!analysis) return null;
  console.log("FULL ANALYSIS:", analysis);

  const businessAnalysis = analysis.business_analysis || {};
  console.log("Business Analysis:", businessAnalysis);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        AI Business Analysis
      </h2>

      <div className="grid grid-cols-2 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-3 text-red-600">
            Pain Points
          </h3>

          <ul className="list-disc ml-5">
            {businessAnalysis.pain_points?.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="font-bold text-lg mb-3 text-green-600">
            Automation Opportunities
          </h3>

          <ul className="list-disc ml-5">
            {businessAnalysis.automation_opportunities?.map((item,index)=>(
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}