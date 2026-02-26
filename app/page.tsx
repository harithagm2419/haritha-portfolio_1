"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen">
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-md z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">HT</h1>
    <div className="space-x-6 text-sm">
      <a href="#about" className="hover:text-blue-400">About</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#experience" className="hover:text-blue-400">Experience</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Haritha Thurpati
        </h1>
        <p className="text-xl mb-4 text-blue-300">
          Data Analyst | BI Developer | Data Engineering Enthusiast
        </p>
        <p className="max-w-2xl text-gray-300">
          Master’s student with hands-on experience in data analytics,
          BI visualization, and scalable data pipeline development.
          Skilled in SQL, Python, PySpark, and Power BI.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">About me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Master’s student in Communication and Media Engineering at Hochschule Offenburg.
          With professional experience at Infosys as a Data Analyst and BI Analyst,
          I specialize in transforming raw enterprise data into meaningful insights.
          My work spans SQL-based analytics, PySpark data processing in Databricks,
          and interactive dashboard creation using Power BI.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-blue-400">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Programming</h3>
              <p className="text-gray-300">Python, SQL, PySpark, Java</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Data & BI</h3>
              <p className="text-gray-300">Power BI, DAX, MSBI, Data Modeling, Star Schema</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="font-semibold text-xl mb-3">Tools</h3>
              <p className="text-gray-300">Databricks, Pandas, Matplotlib, Git, React</p>
            </div>

          </div>
        </div>
      </section>

     {/* PROJECTS SECTION */}
     <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
     <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-blue-400">DataCamp Python Projects</h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <ExpandableCard
        title="History of Lego Sets"
        description="Explored evolution of Lego sets using exploratory data analysis and visualization."
        approach="Cleaned historical datasets, performed trend analysis, and visualized patterns in set complexity and themes."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 2 */}
      <ExpandableCard
        title="Demand Forecasting Model"
        description="Built a forecasting model to predict product demand using time-series analysis."
        approach="Applied moving averages and regression techniques to analyze seasonal patterns and forecast future demand."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 3 */}
      <ExpandableCard
        title="Market Analysis – Product Management"
        description="Data-driven market analysis to inform product strategy and positioning."
        approach="Performed customer segmentation, trend analysis, and dashboard reporting to guide business decisions."
        tech={["Python", "Pandas", "Data Cleaning"]}
      />

      {/* Project 4 */}
      <ExpandableCard
        title="NYC Public School Test Scores"
        description="Explored standardized test results across NYC public schools."
        approach="Cleaned datasets, calculated performance metrics, and visualized disparities using statistical techniques."
        tech={["Python", "Pandas", "Matplotlib"]}
      />

      {/* Project 5 */}
      <ExpandableCard
        title="Investigating Netflix Movies"
        description="Analyzed Netflix movie catalog to discover trends in content and ratings."
        approach="Used EDA to examine genre distribution, release trends, and viewer rating patterns."
        tech={["Python", "Pandas", "EDA"]}
      />

      {/* Project 6 */}
      <ExpandableCard
        title="Debugging Sales Data Workflow"
        description="Identified and resolved data pipeline issues in a sales workflow."
        approach="Traced data inconsistencies, cleaned corrupted entries, and optimized transformation logic."
        tech={["Python", "Data Cleaning"]}
      />

    </div>
  </div>
</section>

{/* EXPERIENCE SECTION */}
<section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
  <h2 className="text-3xl font-semibold mb-12 text-blue-400">
    Professional Experience
  </h2>
  <div className="relative border-l border-white-700">
  <div className="space-y-12">

    {/* ITEM 1 */}
    <div className="flex flex-col md:flex-row md:gap-12">
      {/* LEFT – DATE */}
      <div className="md:w-1/4 text-blue-400 font-medium">
        Nov 2025 – Dec 2025
      </div>

      {/* RIGHT – CONTENT */}
      <div className="md:w-3/4">
        <h3 className="text-lg font-semibold text-white">
          Working Student – Python Programming
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Digital Supply Chain, Gengenbach
        </p>

        <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
          <li>Developed Python-based image & data processing solutions</li>
          <li>Built React + Tailwind web interfaces</li>
          <li>Supported backend–frontend analytical integrations</li>
        </ul>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="md:w-1/4 text-blue-400 font-medium">
        Jul 2025 – Aug 2025
      </div>

      <div className="md:w-3/4">
        <h3 className="text-lg font-semibold text-white">
          Working Student – Data Science
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Work Life Robotics Institute, Offenburg
        </p>

        <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
          <li>Extracted and merged 3D sensor point cloud data</li>
          <li>Labeled datasets using Open3D</li>
          <li>Used Python (NumPy, Pandas) for validation & feature extraction</li>
        </ul>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="md:w-1/4 text-blue-400 font-medium">
        May 2023 – Sep 2024
      </div>

      <div className="md:w-3/4">
        <h3 className="text-lg font-semibold text-white">
          Business Intelligence Analyst
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Infosys Ltd – Client: Cummins Inc.
        </p>

        <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
          <li>Analyzed enterprise data using MS SQL</li>
          <li>Processed large datasets via PySpark (Databricks)</li>
          <li>Built Power BI dashboards & forecasting models</li>
        </ul>
      </div>
    </div>

    {/* ITEM 4 */}
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="md:w-1/4 text-blue-400 font-medium">
        Jul 2022 – Sep 2024
      </div>

      <div className="md:w-3/4">
        <h3 className="text-lg font-semibold text-white">
          Data Analyst
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Infosys Ltd
        </p>

        <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
          <li>Built scalable PySpark pipelines</li>
          <li>Optimized SQL performance</li>
          <li>Designed star-schema data models</li>
        </ul>
      </div>
    </div>

    {/* ITEM 5 */}
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="md:w-1/4 text-blue-400 font-medium">
        Mar 2022 – Jun 2022
      </div>

      <div className="md:w-3/4">
        <h3 className="text-lg font-semibold text-white">
          Data Analyst Intern
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          Infosys Ltd
        </p>

        <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
          <li>Trained in Java, DBMS, UNIX</li>
          <li>Learned ETL & dimensional data modeling</li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">
          Contact
        </h2>

        <p className="text-gray-300 mb-4">
          <a href = "hthurpat@stud.hs-offenburg.de">📧 Student Mail</a>
        </p>
        <p className="text-gray-300 mb-4">
          <a href = "harithagm2419@gmail.com">📧 Official Mail</a>
        </p>

        <a
          href="https://linkedin.com/in/haritha-thurpati-7b9280225"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn Profile
        </a>
      </section>

    </main>
  );
}
function ExpandableCard({ title, description, approach, tech }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg-[#0f172a] p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition cursor-pointer"
    >
      <h3 className="text-white font-semibold text-lg">{title}</h3>

      <p className="text-gray-400 mt-2">{description}</p>

      {open && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-300 text-sm">
            <span className="text-blue-400 font-semibold">Approach: </span>
            {approach}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((item: string, index: number) => (
          <span
            key={index}
            className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

