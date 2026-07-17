console.log("SEARCH BAR LOADED");
export default function SearchBar({
  website,
  setWebsite,
  onAnalyze,
  loading,
}) {
  const handleClick = () => {
    console.log("BUTTON CLICKED");
    onAnalyze();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-semibold mb-4">
        Analyze Company
      </h2>


      <div className="flex gap-4">

        <input
          type="text"
          placeholder="https://companywebsite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="flex-1 border rounded-lg p-3"
        />


        <button
          onClick={handleClick}
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>


      </div>


    </div>
  );
}