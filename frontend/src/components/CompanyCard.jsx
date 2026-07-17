export default function CompanyCard({ company }) {
  if (!company) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Company Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div className="space-y-3">
          <p><strong>Company:</strong> {company.company_name}</p>
          <p><strong>Lead Score:</strong> {company.lead_score}</p>
          <p><strong>Priority:</strong> {company.priority}</p>
          <p><strong>Summary:</strong> {company.company_summary}</p>
        </div>

        <div className="space-y-3">
          <p><strong>Website:</strong> {company.website}</p>
          <p><strong>Business Type:</strong> {company.business_type}</p>
          <p><strong>Cities:</strong> {company.cities}</p>
          <p><strong>Services:</strong> {company.services}</p>
        </div>

      </div>
    </div>
  );
}