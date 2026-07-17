import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";



import api from "../services/api.js";

import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import AnalysisCard from "../components/AnalysisCard";
import OutreachCard from "../components/OutreachCard";
import LeadScoreCard from "../components/LeadScoreCard";
import ActivityTimeline from "../components/ActivityTimeline";
import RecentCompanies from "../components/RecentCompanies";


export default function Dashboard() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {

  getDashboard()
    .then((res)=>{
      console.log("Dashboard Data:", res.data);
      setCompanies(res.data);
    })
    .catch((err)=>{
      console.log("Dashboard Error:", err);
    });

},[]);




  const [website, setWebsite] = useState("");

  const [companyData, setCompanyData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const handleAnalyze = async () => {


    alert("Button Clicked");


    try {


      setLoading(true);

      setError("");



      const response = await api.post("/analyze-company", {

        website,

      });



      console.log("API RESPONSE:", response.data);



      setCompanyData(response.data);



    } catch (err) {


      console.error(err);

      setError("Analysis Failed");


    } finally {


      setLoading(false);


    }


  };




  return (

    <div className="min-h-screen bg-slate-100">


      {/* Navbar */}

      <nav className="bg-blue-700 text-white px-8 py-5 shadow-lg">

        <h1 className="text-3xl font-bold">

          LeadIntel AI

        </h1>

      </nav>



      <div className="max-w-7xl mx-auto p-8">



        <SearchBar

          website={website}

          setWebsite={setWebsite}

          onAnalyze={handleAnalyze}

          loading={loading}

        />




        {error && (

          <p className="text-red-600 mt-4">

            {error}

          </p>

        )}






        <div className="grid grid-cols-3 gap-6 mt-8">


          <StatsCard

            title="Total Companies"

            value="128"

            color="text-blue-600"

          />



          <StatsCard

            title="High Priority Leads"

            value="41"

            color="text-red-500"

          />



          <StatsCard

            title="Average Lead Score"

            value="82"

            color="text-green-600"

          />



        </div>





        <CompanyCard

          company={companyData}

        />



        <AnalysisCard

          analysis={companyData}

        />



        <OutreachCard

           outreach={companyData} 
           />



        <LeadScoreCard

          score={companyData}

        />



        <ActivityTimeline activity={companyData} />



        <RecentCompanies company={companyData} />



      </div>


    </div>

  );

}