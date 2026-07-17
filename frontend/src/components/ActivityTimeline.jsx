export default function ActivityTimeline({ activity }) {

  const companyName =
    activity?.company?.name ||
    activity?.company_name ||
    "Company";

  const activities = [
    {
      title: `Website analyzed for ${companyName}`,
      time: "Just now",
    },
    {
      title: "AI Business Analysis Completed",
      time: "Just now",
    },
    {
      title: "Lead Score Generated",
      time: "Just now",
    },
    {
      title: "AI Outreach Generated",
      time: "Just now",
    },
    {
      title: "Data Saved to PostgreSQL",
      time: "Just now",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-5">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}