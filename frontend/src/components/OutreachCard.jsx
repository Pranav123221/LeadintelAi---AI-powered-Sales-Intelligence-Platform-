export default function OutreachCard({ outreach }) {

  if (!outreach) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        AI Outreach
      </h2>

      <p className="text-gray-500">
        No outreach data available yet
      </p>
    </div>
  );
}


  const data = outreach.outreach || {};


  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        AI Outreach
      </h2>


      <div className="space-y-6">


        <div>
          <h3 className="font-semibold text-blue-700">
            📧 Email Subject
          </h3>

          <div className="bg-gray-100 rounded-lg p-4 mt-2">
            {data.email_subject || "No email subject generated"}
          </div>
        </div>



        <div>
          <h3 className="font-semibold text-blue-700">
            📧 Cold Email
          </h3>

          <div className="bg-gray-100 rounded-lg p-4 mt-2 whitespace-pre-wrap">
            {data.cold_email || "No email generated"}
          </div>
        </div>



        <div>
          <h3 className="font-semibold text-green-700">
            💼 LinkedIn Message
          </h3>

          <div className="bg-gray-100 rounded-lg p-4 mt-2 whitespace-pre-wrap">
            {data.linkedin_message || "No LinkedIn message generated"}
          </div>
        </div>



        <div>
          <h3 className="font-semibold text-emerald-700">
            💬 WhatsApp Message
          </h3>

          <div className="bg-gray-100 rounded-lg p-4 mt-2 whitespace-pre-wrap">
            {data.whatsapp_message || "No WhatsApp message generated"}
          </div>
        </div>


      </div>


    </div>
  );
}